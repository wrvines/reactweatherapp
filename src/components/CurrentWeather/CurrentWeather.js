import axios from "axios";
import React from "react";
// import { WiDegrees } from "react-icons/wi";
import Forecast from "../Forecast/Forecast";
import "./CurrentWeather.css";

function CurrentWeather({
  temp,
  humidity,
  wind,
  conditions,
  image,
  time,
  sunrise,
  sunset,
}) {
  const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const unixDate = new Date(time * 1000);
  const unixSunrise = new Date(sunrise * 1000);
  let options = { day: "numeric", month: "long" };
  let optionsTwo = { hour: "numeric", minute: "numeric" };
  let date = unixDate.toLocaleDateString("en-US", options);
  let sunRise = unixSunrise.toLocaleTimeString("en-US", optionsTwo);
  // console.log(date);

  // const icon = `http://openweathermap.org/img/wn/${fetchIcon}@2x.png`;
  // https://api.openweathermap.org/data/3.0/onecall?lat=39.7392364&lon=-104.984862&appid=3bc574a245ec78a822b5ac520c18060d&exclude=minutely,hourly,alerts&units=imperial

  // React.useEffect(() => {
  //   axios
  //     .get(
  //       `${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&exclude=minutely,hourly,alerts&units=imperial`
  //     )
  //     .then((res) => {
  //       console.log(res.data.daily);
  //       setCurrentWeather(res.data);
  //       setForecast(res.data.daily);
  //     })
  //     .catch((err) => console.log(err));
  // }, [lat, long]);

  return (
    <div className="current-container">
      <div className="current-wrapper">
        <div className="current-weather-top">
          <h3>{`${date}`}</h3>
          <img
            src={`http://openweathermap.org/img/wn/${image}@2x.png`}
            alt=""
          />
          <h4>{`${conditions}`}</h4>
        </div>

        <div className="current-weather-bottom">
          <h1>{`${temp} \u00b0`}</h1>
          <p>{`Humidity: ${humidity}%`}</p>
          <p>
            {`Wind: ${wind}`}
            <span className="speed"> mph</span>
          </p>
          <p>{`Sunrise: ${sunRise}`}</p>
        </div>
      </div>
      {/* <div className="forecast-wrapper">
        {forecast?.map((daily) => (
          <Forecast
            max={daily?.temp?.max}
            min={daily?.temp?.min}
            wind={daily?.wind_speed}
            conditions={daily?.weather[0]?.main}
            image={daily?.weather[0]?.icon}
          />
        ))}
      </div> */}
    </div>
  );
}

export default CurrentWeather;
