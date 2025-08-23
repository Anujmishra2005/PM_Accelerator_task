import React from 'react'

export default function ForecastCard({ date, max, min, precip, prettyTemp }){
  const dt = new Date(date)
  return (
    <div className="forecastCard">
      <div className="date">{dt.toLocaleDateString(undefined, {weekday:'short', month:'short', day:'numeric'})}</div>
      <div className="values">
        <div className="max">{prettyTemp(max)}</div>
        <div className="min">Min {prettyTemp(min)}</div>
      </div>
      <div className="precip">Precip: {precip} mm</div>
    </div>
  )
}
