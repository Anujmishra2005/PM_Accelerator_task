import { useState } from "react";
import Landing from "./pages/Landing";
import Weather from "./pages/Weather";

function App() {
  const [showWeather, setShowWeather] = useState(false);

  return (
    <div className="min-h-screen">
      {showWeather ? (
        <Weather goBack={() => setShowWeather(false)} />
      ) : (
        <Landing onStart={() => setShowWeather(true)} />
      )}
    </div>
  );
}

export default App;
