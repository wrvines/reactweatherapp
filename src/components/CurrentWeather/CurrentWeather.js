import axios from "axios";
import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({ lat, long }) {
  const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const locationBaseUrl = process.env.REACT_APP_GEOCODE_BASE_URL;

  // const [currentWeather, setCurrentWeather] = React.useState("");

  // console.log(
  //   `${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
  // );
  // // `${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
  // //https://api.openweathermap.org/data/3.0/onecall?lat=39.7392364&lon=-104.984862&appid=3bc574a245ec78a822b5ac520c18060d&exclude=minutely,hourly,alerts&units=imperial

  // React.useEffect(() => {
  //   axios
  //     .get(
  //       `${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
  //       // `${baseUrl}?appid=${apiKey}&units=imperial&lat=${lat}&long=${long}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  axios
    .get(`${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  return <div>CurrentWeather</div>;
}

export default CurrentWeather;
