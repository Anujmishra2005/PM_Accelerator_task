function ForecastCard({ data }) {
  const date = new Date(data.dt * 1000);
  return (
    <div className="bg-white text-black rounded-xl p-4 shadow-md text-center">
      <h3 className="font-bold">{date.toLocaleDateString("en-US", { weekday: "short" })}</h3>
      <p>{Math.round(data.main.temp)}°C</p>
      <p className="capitalize">{data.weather[0].description}</p>
    </div>
  );
}

export default ForecastCard;
