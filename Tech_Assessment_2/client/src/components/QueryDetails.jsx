import React, { useState } from "react";
import api from "../api";

function downloadFile(filename, content, type='text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

function toCSV(result, location) {
  // result.daily has fields: time[], temperature_2m_max[], temperature_2m_min[], precipitation_sum[]
  const header = ['date','temp_max_C','temp_min_C','precip_mm'];
  const rows = (result.daily.time || []).map((t, i) => [
    t, result.daily.temperature_2m_max[i], result.daily.temperature_2m_min[i], result.daily.precipitation_sum[i]
  ]);
  const csv = [header.join(','), ...rows.map(r => r.join(','))].join('\n');
  return csv;
}

function toXML(result, location) {
  const times = result.daily.time || [];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<weather location="${location}">\n`;
  for (let i=0;i<times.length;i++){
    xml += `  <day date="${times[i]}">\n`;
    xml += `    <temp_max>${result.daily.temperature_2m_max[i]}</temp_max>\n`;
    xml += `    <temp_min>${result.daily.temperature_2m_min[i]}</temp_min>\n`;
    xml += `    <precip>${result.daily.precipitation_sum[i]}</precip>\n`;
    xml += `  </day>\n`;
  }
  xml += `</weather>`;
  return xml;
}

export default function QueryDetails({ query, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [location, setLocation] = useState(query ? (query.location) : '');
  const [fromDate, setFromDate] = useState(query ? query.fromDate : '');
  const [toDate, setToDate] = useState(query ? query.toDate : '');

  React.useEffect(()=> {
    if (query) {
      setLocation(query.location);
      setFromDate(query.fromDate);
      setToDate(query.toDate);
      setEditing(false);
    }
  }, [query]);

  if (!query) return <div className="card">Select a saved query to view details</div>;

  const result = query.result;

  async function handleUpdate() {
    if (!location || !fromDate || !toDate) { alert("Fields required"); return }
    try {
      await onUpdate(query.id, { location, fromDate, toDate });
    } catch (e) {
      alert("Update error");
    }
  }

  function handleExportJSON() {
    downloadFile(`weather_${query.id}.json`, JSON.stringify(query, null, 2), 'application/json');
  }
  function handleExportCSV() {
    const csv = toCSV(result, query.location);
    downloadFile(`weather_${query.id}.csv`, csv, 'text/csv');
  }
  function handleExportXML() {
    const xml = toXML(result, query.location);
    downloadFile(`weather_${query.id}.xml`, xml, 'application/xml');
  }

  function openMaps() {
    const url = `https://www.google.com/maps/search/?api=1&query=${query.latitude},${query.longitude}`;
    window.open(url, '_blank');
  }

  function openYouTube() {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query.location + ' travel')}`;
    window.open(url, '_blank');
  }

  return (
    <div className="card detailsCard">
      <h3>Saved Query — #{query.id}</h3>
      <div className="detailRow">
        <div><strong>Location</strong><div className="muted">{query.location}</div></div>
        <div><strong>Range</strong><div className="muted">{query.fromDate} → {query.toDate}</div></div>
      </div>

      <div className="actionsRow">
        <button onClick={openMaps}>Open Maps</button>
        <button onClick={openYouTube}>YouTube</button>
        <button onClick={handleExportJSON}>Export JSON</button>
        <button onClick={handleExportCSV}>Export CSV</button>
        <button onClick={handleExportXML}>Export XML</button>
      </div>

      <div style={{marginTop:10}}>
        <h4>Daily data</h4>
        <div className="dailyGrid">
          {(result?.daily?.time || []).map((t, i) => (
            <div key={t} className="dayBox">
              <div className="day">{t}</div>
              <div>Max: {result.daily.temperature_2m_max[i]}°C</div>
              <div>Min: {result.daily.temperature_2m_min[i]}°C</div>
              <div>Precip: {result.daily.precipitation_sum[i]} mm</div>
            </div>
          ))}
        </div>
      </div>

      <div className="editBlock">
        <h4>Edit (location or dates)</h4>
        <input value={location} onChange={e=>setLocation(e.target.value)} />
        <div className="dateRow">
          <input type="date" value={fromDate} onChange={e=>setFromDate(e.target.value)} />
          <input type="date" value={toDate} onChange={e=>setToDate(e.target.value)} />
        </div>
        <div className="formActions">
          <button onClick={handleUpdate}>Save changes</button>
          <button onClick={()=>{ if (confirm('Delete this record?')) { api.deleteQuery(query.id).then(()=>onDelete && onDelete()) } }}>Delete</button>
        </div>
      </div>
    </div>
  );
}
