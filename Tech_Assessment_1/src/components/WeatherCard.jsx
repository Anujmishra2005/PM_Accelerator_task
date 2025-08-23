import React from 'react'

function emojiForCode(code){
  if (code === 0) return '☀️'
  if (code >=1 && code <=3) return '⛅'
  if ((code >= 45 && code <= 48) || (code >= 51 && code <= 65) || (code >= 80 && code <= 82)) return '🌧️'
  if (code >= 71 && code <= 77) return '❄️'
  return '🌤️'
}

export default function WeatherCard({ current, prettyTemp, unitC }){
  return (
    <div className="card weatherCard">
      <div className="row">
        <div className="bigIcon">{emojiForCode(current.weathercode)}</div>
        <div className="mainInfo">
          <div className="place">{current.place}</div>
          <div className="temp">{prettyTemp(current.temperature)}</div>
          <div className="meta">Wind: {current.windspeed} m/s • Time: {new Date(current.time).toLocaleString()}</div>
        </div>
      </div>

      <div className="detailsRow">
        <div className="detail">
          <div className="label">Lat / Lon</div>
          <div className="value">{current.lat?.toFixed(4)} , {current.lon?.toFixed(4)}</div>
        </div>
        <div className="detail">
          <div className="label">Weather code</div>
          <div className="value">{current.weathercode}</div>
        </div>
        <div className="detail">
          <div className="label">Temperature unit</div>
          <div className="value">{unitC ? '°C' : '°F'}</div>
        </div>
      </div>
    </div>
  )
}
