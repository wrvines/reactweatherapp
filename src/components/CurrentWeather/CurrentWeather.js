import axios from "axios";
import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({ lat, long }) {
  const baseUrl = "https://api.openweathermap.org/data/3.0/onecall";
  const apiKey = "3bc574a245ec78a822b5ac520c18060d";

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
  return <div>CurrentWeather</div>;
}

export default CurrentWeather;
