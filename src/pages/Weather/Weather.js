import axios from "axios";
import React from "react";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import Forecast from "../../components/Forecast/Forecast";
import "./Weather.css";

function Weather() {
  // const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const locationBaseUrl = process.env.REACT_APP_GEOCODE_BASE_URL;

  const [location, setLocation] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");

  const handleLocation = (e) => {
    e.preventDefault();
    // console.log(location);
    // console.log(`${locationBaseUrl}?q=${location}&appid=${apiKey}`);
    //http: api.openweathermap.org/geo/1.0/direct?q=casper&appid=3bc574a245ec78a822b5ac520c18060d

    axios
      .get(`${locationBaseUrl}?q=${location}&appid=${apiKey}`)
      .then((res) => {
        // console.log(res.data[0].lon);
        setLat(res.data[0].lat);
        setLong(res.data[0].lon);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="weather-container">
      <div className="weather-search">
        <form onSubmit={handleLocation}>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter City"
            value={location}
          />
          <button type="submit">Get Weather</button>
        </form>
      </div>
      <div className="weather-wrapper">
        <h1>{`Weather for ${location}`}</h1>
        <CurrentWeather lat={lat} long={long} />
        <Forecast lat={lat} long={long} />
      </div>
    </div>
  );
}

export default Weather;
