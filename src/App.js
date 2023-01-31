import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Weather from "./pages/Weather/Weather";

function App() {
  const [latitude, setLatitude] = React.useState(null);
  const [longitude, setLongitude] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Location... ");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log(latitude);
          console.log(longitude);
        },
        () => {
          setStatus("Unable to retieve your location");
        }
      );
    }
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Weather latitude={latitude} longitude={longitude} status={status} />
      </BrowserRouter>
    </div>
  );
}

export default App;
