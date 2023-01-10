import axios from "axios";
import React from "react";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import Forecast from "../../components/Forecast/Forecast";

function Weather() {
  const baseUrl = process.env.REACT_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_WEATHER_API_KEY;
  const locationBaseUrl = process.env.REACT_GEOCODE_BASE_URL;

  const [location, setLocation] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setLocation(e.target.value);
  };

  const handleLocation = (e) => {
    e.preventDefault();
    //http: api.openweathermap.org/geo/1.0/direct?q=casper&appid=3bc574a245ec78a822b5ac520c18060d
    // console.log(e.target.value);
    axios
      .get(`${locationBaseUrl}?q=${location}&appid=${apiKey}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  //   axios
  //     .get(`${locationBaseUrl}?q=${location}&appid=${apiKey}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));

  return (
    <div>
      <form onSubmit={handleLocation}>
        <input
          onChange={handleSearch}
          placeholder="Enter Zipcode or City"
          value={location}
        />
        <input type="submit" value="Submit" />
      </form>
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default Weather;
