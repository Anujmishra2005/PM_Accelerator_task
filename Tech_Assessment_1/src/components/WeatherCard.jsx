function WeatherCard({ data }) {
  return (
    <div className="bg-white text-black rounded-2xl shadow-lg p-6 mt-6 w-80 text-center">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p className="text-lg">{data.weather[0].description}</p>
      <h1 className="text-5xl font-bold">{Math.round(data.main.temp)}°C</h1>
      <div className="flex justify-around mt-4">
        <p>💧 {data.main.humidity}%</p>
        <p>💨 {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
