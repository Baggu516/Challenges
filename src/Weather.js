import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=New York&appid=YOUR_API_KEY`
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Current Weather in {weatherData.name}</h1>
      <p>{weatherData.weather && weatherData.weather[0].description}</p>
      <p>
        Temperature:{" "}
        {weatherData.main && (weatherData.main.temp - 273.15).toFixed(2)}°C
      </p>
      <p>Humidity: {weatherData.main && weatherData.main.humidity}%</p>
      <p>
        Wind Speed:{" "}
        {weatherData.wind && weatherData.wind.speed && weatherData.wind.speed.toFixed(2)} m/s
      </p>
    </div>
  );
};

export default Weather;
