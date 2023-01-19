import axios from "axios";
import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({ lat, long }) {
  const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const locationBaseUrl = process.env.REACT_APP_GEOCODE_BASE_URL;

  const [currentWeather, setCurrentWeather] = React.useState("");
  const [icon, setIcon] = React.useState({});

  const unixTimestamp = currentWeather?.current?.dt;
  const unixDate = new Date(unixTimestamp);
  const localDate = new Date(
    unixDate.getTime() + unixDate.getTimezoneOffset() * 6000
  );

  const fetchIcon = currentWeather?.current?.weather[0]?.icon;
  // const icon = `http://openweathermap.org/img/wn/${fetchIcon}@2x.png`;

  // //https://api.openweathermap.org/data/3.0/onecall?lat=39.7392364&lon=-104.984862&appid=3bc574a245ec78a822b5ac520c18060d&exclude=minutely,hourly,alerts&units=imperial

  React.useEffect(() => {
    axios
      .get(
        `${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&exclude=minutely,hourly,alerts&units=imperial`
        // `${baseUrl}?appid=${apiKey}&units=imperial&lat=${lat}&long=${long}`
      )
      .then((res) => {
        console.log(res.data);
        setCurrentWeather(res.data);
        setIcon(currentWeather?.current?.weather[0]?.icon);
      })
      .catch((err) => console.log(err));
  }, [lat, long]);

  return (
    <div>
      <h1>{`Current weather is ${currentWeather?.current?.temp} `}</h1>
      <h3>{`The time is ${localDate}`}</h3>
      <h3>{`This is the ${icon}`}</h3>
    </div>
  );
}

export default CurrentWeather;
