import React from "react";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import Forecast from "../../components/Forecast/Forecast";

function Weather() {
  const baseUrl = process.env.REACT_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_WEATHER_API_KEY;
  const locationBaseUrl = process.env.REACT_GEOCODE_BASE_URL;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <input onChange={handleSearch} placeholder="Enter Zipcode or City" />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default Weather;
