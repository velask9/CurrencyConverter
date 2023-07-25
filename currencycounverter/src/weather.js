import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'f1sEuIy5A0r9T2PfTHJX3F0TFG52khgH';
  const city = 'New York City';
  const apiUrl = `https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // Extract temperature data from the API response in Celsius
        const temperatureCelsius = data.data.timelines[0].intervals[0].values.temperature;
        // Convert Celsius to Fahrenheit
        const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
        setWeatherData({ temperature: temperatureFahrenheit });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="weather">
      <h2>Weather in {city}</h2>
      <p>Temperature: {weatherData.temperature.toFixed(2)}°F</p>
    </div>
  );
};

export default Weather;
