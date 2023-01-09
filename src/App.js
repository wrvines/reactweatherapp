import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Weather from "./pages/Weather/Weather";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Weather />
      </BrowserRouter>
    </div>
  );
}

export default App;
