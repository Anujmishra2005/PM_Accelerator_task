import React from "react";
import api from "../api";

export default function QueryList({ queries, loading, onSelect, onRefresh }) {
  async function handleDelete(id) {
    if (!confirm("Delete this record?")) return;
    try {
      await api.deleteQuery(id);
      onRefresh && onRefresh();
    } catch (e) {
      alert("Delete failed: " + (e.response?.data?.error || e.message));
    }
  }

  return (
    <div className="card listCard">
      <h3>Saved Queries</h3>
      {loading && <div className="muted">Loading…</div>}
      {!loading && queries.length === 0 && <div className="muted">No saved queries yet</div>}
      <ul className="savedList">
        {queries.map(q => (
          <li key={q.id} className="savedItem">
            <div className="siLeft">
              <div className="siTitle">{q.location}</div>
              <div className="siMeta">{q.fromDate} → {q.toDate}</div>
            </div>
            <div className="siActions">
              <button onClick={async ()=>{ const full = await api.getQuery(q.id); onSelect(full); }}>View</button>
              <button onClick={()=>handleDelete(q.id)} className="btnWarn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
