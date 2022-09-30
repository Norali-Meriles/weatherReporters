import React, { useEffect, useState } from 'react';
import { WeatherCard } from '../components/WeatherCard';
import { Loading } from '../components/Loading';
import useFetch from '../hooks/CustomFetch/useFetch';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  const getCurrentWeather = async () => {
    setIsLoading(true);
    const { data } = await useFetch('http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=auto:ip');
    setWeather(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);
  return (
    <div>
        {isLoading ? <Loading /> : <WeatherCard weather={weather} />}
    </div>
  );
};

export default HomePage;
