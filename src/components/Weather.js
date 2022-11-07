import React from "react";
import "./Weather.css";

function Weather() {
  //store input
  const [zipcode, setZipcode] = React.useState("");
  const [weather, setWeather] = React.useState("");
  const handleTextBox = (event) => {
    // console.log("input");
    // console.log(event.target.value);
    setZipcode(event.target.value);
  };

  const showZipcode = () => {
    // console.log("zipcode");
    setWeather(`Showing Weather for ${zipcode}.`);
    //clear input
    setZipcode("");
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Zipcode"
        onChange={handleTextBox}
        value={zipcode}
      ></input>
      <button onClick={showZipcode}>Submit</button>
      <div>
        <h3>{weather}</h3>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default Weather;
