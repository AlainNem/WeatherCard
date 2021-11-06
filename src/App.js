import React from "react";

import "./App.css";
import WeatherEnginer from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEnginer location="Sydney, au" />
      <WeatherEnginer location="Beirut, lb" />
    </div>
  );
}

export default App;
