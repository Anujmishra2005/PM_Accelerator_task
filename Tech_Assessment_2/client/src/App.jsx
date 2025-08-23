import React, { useEffect, useState } from "react";
import QueryForm from "./components/QueryForm";
import QueryList from "./components/QueryList";
import QueryDetails from "./components/QueryDetails";
import api from "./api";

export default function App() {
  const [queries, setQueries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [loading, setLoading] = useState(false);
  const [qSearch, setQSearch] = useState("");

  useEffect(() => {
    loadQueries();
  }, [refreshFlag]);

  async function loadQueries() {
    setLoading(true);
    try {
      const res = await api.getQueries({ q: qSearch, limit: 200 });
      setQueries(res);
    } catch (e) {
      console.error(e);
      alert("Failed to load saved queries");
    } finally {
      setLoading(false);
    }
  }

  function onCreated() {
    setRefreshFlag(f => f + 1);
  }

  function onDeleted() {
    setSelected(null);
    setRefreshFlag(f => f + 1);
  }

  async function onUpdate(id, payload) {
    try {
      await api.updateQuery(id, payload);
      setRefreshFlag(f => f + 1);
      alert("Updated successfully");
    } catch (e) {
      alert("Update failed: " + (e.response?.data?.error || e.message));
    }
  }

  return (
    <div className="ta2-root">
      <header className="ta2-header">
        <h1>Weather App — Advanced (Tech Assessment 2)</h1>
        <p className="muted">Create a saved weather query (location + date range), then Read / Update / Delete it.</p>
      </header>

      <main className="ta2-main">
        <aside className="left">
          <QueryForm onCreated={onCreated} />
        </aside>

        <section className="center">
          <div className="listTop">
            <input placeholder="Search saved locations..." value={qSearch} onChange={e=>setQSearch(e.target.value)} />
            <button onClick={loadQueries}>Search</button>
            <button onClick={()=>{ setQSearch(''); loadQueries(); }}>Clear</button>
          </div>

          <QueryList queries={queries} loading={loading} onSelect={setSelected} onRefresh={()=>setRefreshFlag(f=>f+1)} />
        </section>

        <aside className="right">
          <QueryDetails query={selected} onDelete={onDeleted} onUpdate={onUpdate} />
        </aside>
      </main>

      <footer className="ta2-footer">
        <small>Server: Open-Meteo; Client: React + Vite • Built for Tech Assessment</small>
      </footer>
    </div>
  );
}
