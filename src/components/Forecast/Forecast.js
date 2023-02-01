import axios from "axios";
import React from "react";
import "./Forecast.css";

function Forecast({ lat, long, max, min, wind, conditions, image, time }) {
  const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const unixDate = new Date(time * 1000);
  let options = { day: "numeric", month: "long" };
  let date = unixDate.toLocaleDateString("en-US", options);

  const high = Math.round(max);
  const low = Math.round(min);
  const windSpeed = Math.round(wind);

  // console.log(date);
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
      <div className="forecast-left">
        <h4>{`${date}`}</h4>
        <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt="" />
        <p>{conditions}</p>
      </div>
      <div className="forecast-right">
        <p>{`High: ${high} \u00b0`}</p>
        <p>{`Low: ${low} \u00b0`}</p>
        <p>
          {`Wind: ${windSpeed}`}
          <span className="speed"> mph</span>
        </p>
      </div>
    </div>
  );
}

export default Forecast;
