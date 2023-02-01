import axios from "axios";
import React from "react";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import Forecast from "../../components/Forecast/Forecast";
import "./Weather.css";

function Weather({ latitude, longitude }) {
  // console.log(`${locationBaseUrl}?q=${location}&appid=${apiKey}`);
  //http: api.openweathermap.org/geo/1.0/direct?q=casper&appid=3bc574a245ec78a822b5ac520c18060d
  // const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
  const locationBaseUrl = process.env.REACT_APP_GEOCODE_BASE_URL;

  const [location, setLocation] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");
  const [localWeather, setLocalWeather] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [currentWeather, setCurrentWeather] = React.useState("");
  const [forecast, setForecast] = React.useState([]);

  const handleLocation = (e) => {
    e.preventDefault();
    axios
      .get(`${locationBaseUrl}?q=${location}&appid=${apiKey}`)
      .then((res) => {
        // console.log(res.data[0].lon);
        setLat(res.data[0].lat);
        setLong(res.data[0].lon);
        setSuccess(true);
      })
      .catch((err) => console.log(err));
  };
  // React.useEffect(() => {
  //   axios
  //     .get(
  //       `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&exclude=minutely,hourly,alerts&units=imperial`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       console.log(longitude);
  //       setLocalWeather(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  React.useEffect(() => {
    axios
      .get(
        `${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&exclude=minutely,hourly,alerts&units=imperial`
      )
      .then((res) => {
        // console.log(res.data.daily);
        setCurrentWeather(res.data);
        setForecast(res.data.daily);
        // console.log(forecast);
      })
      .catch((err) => console.log(err));
  }, [lat, long]);

  return (
    <div className="weather-container">
      <div className="weather-search">
        <form onSubmit={handleLocation} className="search-form">
          <input
            className="search-input"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter City"
            value={location}
          />
          <button type="submit">Get Weather</button>
        </form>
      </div>
      <div className="weather-wrapper">
        {success ? (
          <div>
            <div>
              <CurrentWeather
                temp={currentWeather?.current?.temp}
                humidity={currentWeather?.current?.humidity}
                wind={currentWeather?.current?.wind_speed}
                conditions={currentWeather?.current?.weather[0]?.main}
                image={currentWeather?.current?.weather[0]?.icon}
                time={currentWeather?.current?.dt}
              />
            </div>
            <div className="forecast-wrapper">
              {forecast?.map((daily) => (
                <Forecast
                  max={daily?.temp?.max}
                  min={daily?.temp?.min}
                  wind={daily?.wind_speed}
                  conditions={daily?.weather[0]?.main}
                  image={daily?.weather[0]?.icon}
                  time={daily?.dt}
                />
              ))}
            </div>
          </div>
        ) : (
          // <div>{`Current weather in your location is ${localWeather}`}</div>
          <div>
            <h1>Enter your city to see your weather.</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
