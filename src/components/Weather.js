import React from "react";
import "./Weather.css";
import axios from "axios";

function Weather() {
  //store input
  const [zipcode, setZipcode] = React.useState("");
  const [weather, setWeather] = React.useState("");
  const [forecast, setForecast] = React.useState("");
  const endpoint =
    "https://api.openweathermap.org/data/2.5/weather?appid=12ea3c9f921a4ca10f046151c2b64c99&units=imperial&zip=";
  let url = `${endpoint}${zipcode}`;

  const fetchWeather = () => {
    axios.get(url).then((response) => {
      // console.log(response.data);
      setForecast(response.data);
    });
  };

  const handleTextBox = (event) => {
    // console.log("input");
    // console.log(event.target.value);
    setZipcode(event.target.value);
  };

  const showZipcode = () => {
    // console.log("zipcode");
    setWeather(`Showing Weather for ${zipcode}.`);
    // console.log(url);
    //clear input
    setZipcode("");
  };

  const handleClick = (event) => {
    showZipcode();
    fetchWeather();
  };

  return (
    <div className="containter">
      <input
        type="number"
        placeholder="Enter Zipcode"
        onChange={handleTextBox}
        value={zipcode}
      ></input>
      <br></br>
      <button onClick={handleClick}>Submit</button>
      <div>
        <h3 className="h3">{weather}</h3>
        <p className="city">City: {forecast?.name}</p>
        <p className="temp">Temperature: {forecast?.main.temp}&deg; F</p>
        <p className="conditions">
          Conditions: {forecast?.weather[0].description}
        </p>
      </div>
    </div>
  );
}

export default Weather;
