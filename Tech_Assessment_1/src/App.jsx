import React, { useEffect, useState, useRef } from 'react'
import WeatherCard from './components/WeatherCard'
import ForecastCard from './components/ForecastCard'
import * as weatherApi from './services/weatherApi'

/*
  App features:
  - Search location (name / postal / coords)
  - Use my location
  - Show current weather + 5-day forecast
  - Unit toggle (C/F)
  - Recent searches (localStorage)
  - Export results (JSON / CSV)
  - Validate input
*/

const STORAGE_RECENT = 'wa_recent_searches_v1'
const STORAGE_UNITC = 'wa_unit_c_v1'

function isCoordinates(text){
  // lat,lon numeric pattern
  const parts = text.split(',').map(s=>s.trim())
  if (parts.length !== 2) return false
  return !isNaN(parseFloat(parts[0])) && !isNaN(parseFloat(parts[1]))
}

function csvEscape(v){
  if (v === null || v === undefined) return ''
  const s = String(v)
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g,'""')}"`
  }
  return s
}

export default function App(){
  const [query, setQuery] = useState('')
  const [unitC, setUnitC] = useState(()=> {
    try { return JSON.parse(localStorage.getItem(STORAGE_UNITC)) ?? true } catch { return true }
  })
  const [recent, setRecent] = useState(()=> {
    try { return JSON.parse(localStorage.getItem(STORAGE_RECENT)) || [] } catch { return [] }
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const inputRef = useRef(null)

  useEffect(()=> {
    localStorage.setItem(STORAGE_RECENT, JSON.stringify(recent))
  }, [recent])

  useEffect(()=> {
    localStorage.setItem(STORAGE_UNITC, JSON.stringify(unitC))
  }, [unitC])

  useEffect(()=> {
    inputRef.current?.focus()
  }, [])

  function addRecent(item){
    setRecent(prev => {
      const next = [item, ...prev.filter(r => r.key !== item.key)].slice(0,6)
      return next
    })
  }

  function prettyTemp(tC){
    if (tC === undefined || tC === null) return '—'
    return unitC ? `${Math.round(tC)}°C` : `${Math.round((tC*9)/5 + 32)}°F`
  }

  async function handleSearch(q){
    if (!q || !q.trim()) { setError('Enter city / postal / coordinates (lat,lon) / landmark'); return }
    setError(''); setLoading(true); setCurrent(null); setForecast(null)
    try {
      let lat, lon, place
      if (isCoordinates(q)){
        const parts = q.split(',').map(p=>parseFloat(p.trim()))
        lat = parts[0]; lon = parts[1]; place = `${lat.toFixed(4)},${lon.toFixed(4)}`
      } else {
        // geocode via Open-Meteo search
        const geo = await weatherApi.geocode(q)
        if (!geo) { setError('Location not found'); setLoading(false); return }
        lat = geo.latitude; lon = geo.longitude
        place = `${geo.name}${geo.admin1 ? ', '+geo.admin1 : ''}, ${geo.country}`
      }

      const weather = await weatherApi.fetchCurrentAndDaily(lat, lon)
      if (!weather) { setError('Weather fetch failed'); setLoading(false); return }

      setCurrent({ place, lat, lon, ...weather.current_weather })
      setForecast(weather.daily)
      addRecent({ key: place, place, lat, lon, when: new Date().toISOString() })
    } catch (e){
      console.error(e); setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  function handleUseMyLocation(){
    setError(''); setLoading(true)
    if (!navigator.geolocation){
      setError('Geolocation not supported by browser'); setLoading(false); return
    }
    navigator.geolocation.getCurrentPosition(async pos=>{
      try {
        const lat = pos.coords.latitude, lon = pos.coords.longitude
        // reverse geocode to human name (best-effort)
        const rev = await weatherApi.reverseGeocode(lat, lon)
        const place = rev?.address && (rev.address.city || rev.address.town || rev.address.village || rev.address.country) || `${lat.toFixed(3)},${lon.toFixed(3)}`
        const weather = await weatherApi.fetchCurrentAndDaily(lat, lon)
        setCurrent({ place, lat, lon, ...weather.current_weather })
        setForecast(weather.daily)
        addRecent({ key: place, place, lat, lon, when: new Date().toISOString() })
      } catch(e){
        console.error(e); setError('Unable to fetch weather for your location')
      } finally { setLoading(false) }
    }, err => { setError('Permission denied or unavailable'); setLoading(false) })
  }

  function clearResults(){
    setCurrent(null); setForecast(null); setError(''); setLoading(false)
  }

  function clearRecent(){
    setRecent([]); localStorage.removeItem(STORAGE_RECENT)
  }

  function exportJSON(){
    if (!current || !forecast) { setError('Nothing to export'); return }
    const payload = { current, forecast }
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `weather_${current.place.replace(/[^a-z0-9]+/ig,'_')}.json`; a.click()
    URL.revokeObjectURL(url)
  }

  function exportCSV(){
    if (!current || !forecast) { setError('Nothing to export'); return }
    // current row + daily rows
    const rows = []
    rows.push(['Type','Place','Lat','Lon','Time','Temp_max_C','Temp_min_C','Precip_mm'])
    const times = forecast.time || []
    const maxs = forecast.temperature_2m_max || []
    const mins = forecast.temperature_2m_min || []
    const prec = forecast.precipitation_sum || []
    for (let i=0;i<times.length;i++){
      rows.push([
        'daily',
        current.place,
        current.lat,
        current.lon,
        times[i],
        maxs[i],
        mins[i],
        prec[i]
      ])
    }
    // build CSV
    const csv = rows.map(r => r.map(csvEscape).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `weather_${current.place.replace(/[^a-z0-9]+/ig,'_')}.csv`; a.click()
    URL.revokeObjectURL(url)
  }

  function openInMaps(){
    if (!current) return
    const { lat, lon } = current
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
    window.open(url, '_blank')
  }

  return (
    <div className="root">
      <header className="header">
        <div>
          <h1>Weather App — Tech Assessment 1</h1>
          <p className="muted">Search by city / postal code / landmark / coordinates. Live data from Open-Meteo.</p>
        </div>

        <div className="controls">
          <div className="searchRow">
            <input
              ref={inputRef}
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder='e.g. "Paris" or "10001" or "37.77,-122.42"'
              onKeyDown={e=>{ if (e.key === 'Enter') handleSearch(query) }}
            />
            <button className="btn" onClick={()=>handleSearch(query)} disabled={loading}>Search</button>
            <button className="btn ghost" onClick={handleUseMyLocation}>Use my location</button>
          </div>

          <div className="smallControls">
            <label className="toggle">
              <input type="checkbox" checked={unitC} onChange={()=>setUnitC(u=>!u)} />
              <span>°C</span>
            </label>
            <button className="link" onClick={clearResults}>Reset</button>
          </div>
        </div>
      </header>

      <main className="mainContent">
        <aside className="leftPane">
          <div className="card">
            <h3>Recent searches</h3>
            {recent.length === 0 && <div className="muted">No recent searches</div>}
            <ul className="recentList">
              {recent.map(r=>(
                <li key={r.key} className="recentItem">
                  <button onClick={()=> handleSearch(`${r.lat},${r.lon}`)} className="recentBtn">{r.place}</button>
                  <div className="recentTime">{new Date(r.when).toLocaleString()}</div>
                </li>
              ))}
            </ul>
            <div className="actionsRow">
              <button className="link" onClick={clearRecent}>Clear</button>
              <button className="link" onClick={()=>{
                // import recent to query input
                if (recent[0]) setQuery(`${recent[0].lat},${recent[0].lon}`)
              }}>Use latest</button>
            </div>
          </div>

          <div className="card smallCard">
            <h4>Export</h4>
            <div className="exportRow">
              <button className="btn small" onClick={exportJSON} disabled={!current}>Export JSON</button>
              <button className="btn small" onClick={exportCSV} disabled={!current}>Export CSV</button>
            </div>
            <div className="muted" style={{marginTop:8}}>Exports include current + daily results for chosen range (5 days).</div>
          </div>

          <div className="card smallCard">
            <h4>Notes</h4>
            <ul className="muted">
              <li>Uses Open-Meteo (no API key).</li>
              <li>Coordinates format: <code>lat,lon</code>.</li>
              <li>Replace icons with SVGs if desired.</li>
            </ul>
          </div>
        </aside>

        <section className="centerPane">
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">Loading…</div>}

          {!current && !loading && (
            <div className="placeholderCard">
              <h2>Try a search</h2>
              <p className="muted">Examples: <button className="example" onClick={()=>handleSearch('New York')}>New York</button> <button className="example" onClick={()=>handleSearch('10001')}>10001</button> <button className="example" onClick={()=>handleSearch('Eiffel Tower')}>Eiffel Tower</button></p>
            </div>
          )}

          {current && (
            <div>
              <WeatherCard current={current} prettyTemp={prettyTemp} unitC={unitC} />
              <div className="utilityRow">
                <button className="btn" onClick={openInMaps}>Open in Maps</button>
                <button className="btn ghost" onClick={clearResults}>Clear</button>
              </div>

              {forecast && (
                <div className="forecastGrid">
                  {forecast.time.map((t,i)=>(
                    <ForecastCard
                      key={t}
                      date={t}
                      max={forecast.temperature_2m_max[i]}
                      min={forecast.temperature_2m_min[i]}
                      precip={forecast.precipitation_sum[i]}
                      prettyTemp={prettyTemp}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        <aside className="rightPane card">
          <h4>About</h4>
          <p className="muted">This app demonstrates API integration, geocoding, geolocation, persistence and export capability for the Tech Assessment.</p>
          <p className="muted" style={{marginTop:8}}>Your name: <strong>ANUJ MISHRA</strong></p>
        </aside>
      </main>

      <footer className="footer">
        <small>Data via Open-Meteo • Built for Tech Assessment 1</small>
      </footer>
    </div>
  )
}
