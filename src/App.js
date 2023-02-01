import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Weather from "./pages/Weather/Weather";

function App() {
  const [latitude, setLatitude] = React.useState({});
  const [longitude, setLongitude] = React.useState({});
  const [geolocation, setGeolocation] = React.useState({});

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus("Geolocation is not supported by your browser");
  //   } else {
  //     setStatus("Location... ");
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setStatus(null);
  //         setLatitude(position.coords.latitude);
  //         setLongitude(position.coords.longitude);
  //         console.log(latitude);
  //         console.log(longitude);
  //       },
  //       () => {
  //         setStatus("Unable to retieve your location");
  //       }
  //     );
  //   }
  // };

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (postion) => {
          setGeolocation({
            lat: postion.coords.latitude,
            long: postion.coords.longitude,
          });
          console.log(geolocation.long);
        },
        (err) => console.log(err)
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Weather latitude={geolocation.lat} longitude={geolocation.long} />
      </BrowserRouter>
    </div>
  );
}

export default App;
