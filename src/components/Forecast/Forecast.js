import axios from "axios";
import React from "react";
import "./Forecast.css";

function Forecast({ lat, long, max, min, wind, conditions, image }) {
  const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const [forecast, setForecast] = React.useState([]);

  // React.useEffect(() => {
  //   axios
  //     .get(
  //       `${baseUrl}?lat=${lat}&lon=${long}&appid=${apiKey}&exclude=minutely,hourly,alerts&units=imperial`
  //     )
  //     .then((res) => {
  //       console.log(res.data.daily);
  //       setForecast(res.data.daily);
  //     })
  //     .catch((err) => console.log(err));
  // }, [lat, long]);
  return (
    <div className="forecast-container">
      <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt="" />
      <p>{max}</p>
      <p>{min}</p>
      <p>{wind}</p>
      <p>{conditions}</p>
    </div>
  );
}

export default Forecast;
