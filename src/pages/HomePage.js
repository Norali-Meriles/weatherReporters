import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherCard } from '../components/WeatherCard';
import { Loading } from '../components/Loading';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  const getWeather = async () => {
    setIsLoading(true);
    const { data } = await axios('http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=Tucuman&days=1&aqi=no&alerts=no');
    setWeather(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getWeather();
  }, []);

  console.log(weather);

  return (
    <div>
        {isLoading && <Loading />}
        <WeatherCard weather={weather} />
    </div>
  );
};

export default HomePage;
