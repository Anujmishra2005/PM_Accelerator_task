import { useState } from "react";
import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import Loader from "../components/Loader";

function Weather({ goBack }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_API_KEY"; // Replace with OpenWeather API

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);

      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const dataForecast = await resForecast.json();
      setForecast(dataForecast.list.slice(0, 5));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 text-white">
      <Navbar goBack={goBack} />
      <div className="flex flex-col items-center p-5">
        <div className="flex gap-3">
          <input
            className="px-4 py-2 rounded-lg text-black"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600"
          >
            Search
          </button>
        </div>

        {loading && <Loader />}

        {weather && !loading && <WeatherCard data={weather} />}

        {forecast.length > 0 && (
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-5 gap-3">
            {forecast.map((f, i) => (
              <ForecastCard key={i} data={f} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
