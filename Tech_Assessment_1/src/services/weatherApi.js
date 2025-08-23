// Service wrapper for Open-Meteo geocoding and forecast
const GEOCODE_BASE = 'https://geocoding-api.open-meteo.com/v1'
const FORECAST_BASE = 'https://api.open-meteo.com/v1/forecast'

export async function geocode(query){
  try {
    const url = `${GEOCODE_BASE}/search?name=${encodeURIComponent(query)}&count=5`
    const res = await fetch(url)
    if (!res.ok) return null
    const j = await res.json()
    if (!j.results || j.results.length === 0) return null
    return j.results[0] // best match
  } catch(e){
    console.error('geocode error', e)
    return null
  }
}

export async function reverseGeocode(lat, lon){
  try {
    const url = `${GEOCODE_BASE}/reverse?latitude=${lat}&longitude=${lon}&count=1`
    const res = await fetch(url)
    if (!res.ok) return null
    const j = await res.json()
    return j
  } catch(e){
    console.error('reverse geocode error', e)
    return null
  }
}

export async function fetchCurrentAndDaily(lat, lon){
  try {
    // daily: max,min temps & precipitation sum, forecast_days=5
    const url = `${FORECAST_BASE}?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=5`
    const res = await fetch(url)
    if (!res.ok) return null
    const j = await res.json()
    return j
  } catch(e){
    console.error('fetch forecast error', e)
    return null
  }
}
