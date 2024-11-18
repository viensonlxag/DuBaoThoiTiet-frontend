import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/weather')
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the weather data!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <p>City: {weather.city}</p>
      <p>Temperature: {weather.temperature}</p>
      <p>Description: {weather.description}</p>
    </div>
  );
}

export default App;
