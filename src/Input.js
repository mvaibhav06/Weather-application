import { useState, useEffect } from "react";
import axios from "axios";

const Input = ({ getWeather }) => {
  const [location, setLocation] = useState("");

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/current.json",
        {
          params: {
            key: "c835e4925808482caad230654232311",
            q: location,
          },
        }
      );

      getWeather(
        response.data.current.condition.text,
        response.data.current.condition.icon,
        location
      );
    } catch (error) {
      console.log("Error in fetching data", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  useEffect(() => {
    const storedCity = localStorage.getItem("storedCity");
    if (storedCity) {
      setLocation(storedCity);
      fetchData();
    }
  }, []);

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        placeholder="Search for a city"
        value={location}
        onChange={handleLocation}
        className="form-control"
      />
      <button onClick={handleSubmit} className="btn red-bg">
        Submit
      </button>
    </form>
  );
};

export default Input;
