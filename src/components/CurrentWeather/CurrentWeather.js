import axios from "axios";
import React from "react";
import { WiDegrees } from "react-icons/wi";
import Forecast from "../Forecast/Forecast";
import "./CurrentWeather.css";

function CurrentWeather({ lat, long }) {
  const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  // const locationBaseUrl = process.env.REACT_APP_GEOCODE_BASE_URL;

  const [currentWeather, setCurrentWeather] = React.useState("");
  const [forecast, setForecast] = React.useState([]);

  const unixTimestamp = currentWeather?.current?.dt;
  // const unixDate = new Date(unixTimestamp);
  // const localDate = new Date(
  //   unixDate.getTime() + unixDate.getTimezoneOffset() * 6000
  // );
  // const convertToLocalTime = () => {
  //   const date = new Date(unixTimestamp);
  //   return date.toLocaleDateString();
  // };

  // const icon = `http://openweathermap.org/img/wn/${fetchIcon}@2x.png`;
  // https://api.openweathermap.org/data/3.0/onecall?lat=39.7392364&lon=-104.984862&appid=3bc574a245ec78a822b5ac520c18060d&exclude=minutely,hourly,alerts&units=imperial

  React.useEffect(() => {
    axios
      .get(
        `${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&exclude=minutely,hourly,alerts&units=imperial`
      )
      .then((res) => {
        console.log(res.data.daily);
        setCurrentWeather(res.data);
        setForecast(res.data.daily);
      })
      .catch((err) => console.log(err));
  }, [lat, long]);

  return (
    <div className="current-container">
      <div className="current-wrapper">
        <div className="current-weather-top">
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather?.current?.weather[0]?.icon}@2x.png`}
            alt=""
          />
          <h1>{`${currentWeather?.current?.temp} \u00b0`}</h1>
        </div>

        <div className="current-weather-bottom">
          <p>{`Humidity: ${currentWeather?.current?.humidity}%`}</p>
          <p>{`Wind: ${currentWeather?.current?.wind_speed}`}</p>
          {/* <h3>{`The time is ${convertToLocalTime()}`}</h3> */}

          <h4>{`${currentWeather?.current?.weather[0]?.main}`}</h4>
        </div>
      </div>
      <div className="forecast-wrapper">
        {forecast?.map((daily) => (
          <Forecast
            max={daily?.temp?.max}
            min={daily?.temp?.min}
            wind={daily?.wind_speed}
            conditions={daily?.weather[0]?.main}
            image={daily?.weather[0]?.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrentWeather;
