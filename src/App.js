import "./App.css";
import Input from "./Input";
import { useState } from "react";
import Image from "./Image";

function App() {
  const [data, setData] = useState([]);

  const getWeather = (weather, icon, location) => {
    const temp = [weather, icon];
    localStorage.setItem("storedCity", location);
    setData(temp);
  };

  return (
    <div>
      <h1>Simple Weather App</h1>
      <Input getWeather={getWeather} />
      {data.length > 0 && <Image data={data} />}
    </div>
  );
}

export default App;
