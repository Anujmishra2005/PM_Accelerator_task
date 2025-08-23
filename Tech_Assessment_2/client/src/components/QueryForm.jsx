import React, { useState } from "react";
import api from "../api";

function todayISO() {
  return new Date().toISOString().slice(0,10);
}

export default function QueryForm({ onCreated }) {
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState(todayISO());
  const [toDate, setToDate] = useState(todayISO());
  const [loading, setLoading] = useState(false);

  function validDates() {
    if (!fromDate || !toDate) return false;
    return new Date(fromDate) <= new Date(toDate);
  }

  async function handleCreate(e) {
    e.preventDefault();
    if (!location.trim()) { alert("Enter a location (city, postal, coordinates lat,lon or landmark)"); return; }
    if (!validDates()) { alert("Invalid date range (from <= to)"); return; }

    setLoading(true);
    try {
      const payload = { location, fromDate, toDate };
      const res = await api.createQuery(payload);
      alert("Created id: " + res.id);
      setLocation("");
      onCreated && onCreated();
    } catch (err) {
      alert("Create failed: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card formCard">
      <h3>Create saved query</h3>
      <form onSubmit={handleCreate} className="form">
        <label>Location</label>
        <input value={location} onChange={e=>setLocation(e.target.value)} placeholder='City / Postal / "lat,lon" / Landmark' />

        <div className="dateRow">
          <div>
            <label>From</label>
            <input type="date" value={fromDate} onChange={e=>setFromDate(e.target.value)} />
          </div>
          <div>
            <label>To</label>
            <input type="date" value={toDate} onChange={e=>setToDate(e.target.value)} />
          </div>
        </div>

        <div className="formActions">
          <button className="btn" type="submit" disabled={loading}>Save</button>
          <button className="btn ghost" type="button" onClick={()=>{ setLocation(''); setFromDate(todayISO()); setToDate(todayISO()); }}>Reset</button>
        </div>
      </form>
    </div>
  );
}
