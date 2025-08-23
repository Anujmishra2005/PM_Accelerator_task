// Tech_Assessment_2/server/index.js
import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, "data.db");
const db = new Database(DB_PATH);
const app = express();
app.use(cors());
app.use(express.json());

// Create table
db.exec(`
CREATE TABLE IF NOT EXISTS queries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  location TEXT NOT NULL,
  latitude REAL,
  longitude REAL,
  fromDate TEXT NOT NULL,
  toDate TEXT NOT NULL,
  createdAt TEXT NOT NULL,
  result JSON
);
`);

// Helpers
function isoDate(s) {
  return /^\d{4}-\d{2}-\d{2}$/.test(s);
}

async function geocode(query) {
  // Use Open-Meteo geocoding (no key)
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const j = await res.json();
  if (!j.results || j.results.length === 0) return null;
  return j.results[0];
}

async function reverseGeocode(lat, lon) {
  const url = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  return res.json();
}

async function fetchDaily(lat, lon, from, to) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=UTC&start_date=${from}&end_date=${to}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Forecast API failed: ${res.status}`);
  return await res.json();
}

// CREATE - add a saved query (location + date range -> store result)
app.post("/api/queries", async (req, res) => {
  try {
    const { location, fromDate, toDate } = req.body;
    if (!location || !fromDate || !toDate) return res.status(400).json({ error: "Missing fields" });
    if (!isoDate(fromDate) || !isoDate(toDate)) return res.status(400).json({ error: "Dates must be YYYY-MM-DD" });
    if (new Date(fromDate) > new Date(toDate)) return res.status(400).json({ error: "fromDate must be <= toDate" });

    // coordinates format? "lat,lon"
    let lat, lon, placeName;
    const parts = location.split(",").map(p => p.trim());
    if (parts.length === 2 && !isNaN(parseFloat(parts[0])) && !isNaN(parseFloat(parts[1]))) {
      lat = parseFloat(parts[0]);
      lon = parseFloat(parts[1]);
      const rev = await reverseGeocode(lat, lon);
      placeName = rev?.address && (rev.address.city || rev.address.town || rev.address.village || rev.address.country) || `${lat.toFixed(3)},${lon.toFixed(3)}`;
    } else {
      // geocode fuzzy match
      const geo = await geocode(location);
      if (!geo) return res.status(400).json({ error: "Location not found" });
      lat = geo.latitude;
      lon = geo.longitude;
      placeName = `${geo.name}${geo.admin1 ? ", " + geo.admin1 : ""}, ${geo.country}`;
    }

    const data = await fetchDaily(lat, lon, fromDate, toDate);

    const stmt = db.prepare(`INSERT INTO queries
      (location, latitude, longitude, fromDate, toDate, createdAt, result)
      VALUES (?, ?, ?, ?, ?, ?, ?)`);

    const info = stmt.run(placeName, lat, lon, fromDate, toDate, new Date().toISOString(), JSON.stringify(data));
    const inserted = db.prepare("SELECT id, location, latitude, longitude, fromDate, toDate, createdAt FROM queries WHERE id = ?").get(info.lastInsertRowid);

    res.json({ id: inserted.id, location: inserted.location, latitude: inserted.latitude, longitude: inserted.longitude, fromDate: inserted.fromDate, toDate: inserted.toDate, createdAt: inserted.createdAt, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// READ - list queries (with optional limit / offset / search)
app.get("/api/queries", (req, res) => {
  const { q, limit = 50, offset = 0 } = req.query;
  try {
    let rows;
    if (q) {
      const stmt = db.prepare(`SELECT id, location, latitude, longitude, fromDate, toDate, createdAt FROM queries WHERE location LIKE ? ORDER BY id DESC LIMIT ? OFFSET ?`);
      rows = stmt.all(`%${q}%`, Number(limit), Number(offset));
    } else {
      const stmt = db.prepare(`SELECT id, location, latitude, longitude, fromDate, toDate, createdAt FROM queries ORDER BY id DESC LIMIT ? OFFSET ?`);
      rows = stmt.all(Number(limit), Number(offset));
    }
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// READ one by id (full result)
app.get("/api/queries/:id", (req, res) => {
  const id = Number(req.params.id);
  const row = db.prepare("SELECT * FROM queries WHERE id = ?").get(id);
  if (!row) return res.status(404).json({ error: "Not found" });
  // parse JSON result before returning
  try {
    row.result = JSON.parse(row.result);
  } catch (e) {
    row.result = row.result;
  }
  res.json(row);
});

// UPDATE - update location or date range; re-geocode & refetch result
app.put("/api/queries/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { location, fromDate, toDate } = req.body;
    if (!location || !fromDate || !toDate) return res.status(400).json({ error: "Missing fields" });
    if (!isoDate(fromDate) || !isoDate(toDate)) return res.status(400).json({ error: "Dates must be YYYY-MM-DD" });
    if (new Date(fromDate) > new Date(toDate)) return res.status(400).json({ error: "fromDate must be <= toDate" });

    // Determine lat/lon from location (either coords or geocode)
    let lat, lon, placeName;
    const parts = location.split(",").map(p => p.trim());
    if (parts.length === 2 && !isNaN(parseFloat(parts[0])) && !isNaN(parseFloat(parts[1]))) {
      lat = parseFloat(parts[0]);
      lon = parseFloat(parts[1]);
      const rev = await reverseGeocode(lat, lon);
      placeName = rev?.address && (rev.address.city || rev.address.town || rev.address.village || rev.address.country) || `${lat.toFixed(3)},${lon.toFixed(3)}`;
    } else {
      const geo = await geocode(location);
      if (!geo) return res.status(400).json({ error: "Location not found" });
      lat = geo.latitude; lon = geo.longitude;
      placeName = `${geo.name}${geo.admin1 ? ", " + geo.admin1 : ""}, ${geo.country}`;
    }

    const data = await fetchDaily(lat, lon, fromDate, toDate);

    const stmt = db.prepare(`UPDATE queries SET location = ?, latitude = ?, longitude = ?, fromDate = ?, toDate = ?, result = ? WHERE id = ?`);
    stmt.run(placeName, lat, lon, fromDate, toDate, JSON.stringify(data), id);

    const updated = db.prepare("SELECT id, location, latitude, longitude, fromDate, toDate, createdAt FROM queries WHERE id = ?").get(id);
    res.json({ ...updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE
app.delete("/api/queries/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    db.prepare("DELETE FROM queries WHERE id = ?").run(id);
    res.json({ deleted: id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Simple health
app.get("/api/health", (req, res) => res.json({ ok: true, ts: new Date().toISOString() }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
