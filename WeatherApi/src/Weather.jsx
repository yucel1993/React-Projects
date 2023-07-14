import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c318e7277211e47858169a9ae63c3263&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div>
      {weatherData ? (
        <>
          <h2>City: {weatherData.name}</h2>
          <h2>Temperature: {weatherData.main.temp}°C</h2>
          <h2>Weather: {weatherData.weather[0].description}</h2>
          {weatherData.weather[0].icon && (
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          )}
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
