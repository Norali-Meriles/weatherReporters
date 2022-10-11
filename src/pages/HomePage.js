/* istanbul ignore file */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherCard } from '../components/WeatherCard';
import { Loading } from '../components/Loading';
import { Search } from '../components/Search';
import { Forecast } from '../components/CardForecasday';
import { InfoCards } from '../components/InfoCards';
import { ClimaProvider } from '../providers/ClimaProvider';
import { useTheme } from '../providers/ThemeProvider';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState([]);
  const { theme } = useTheme();

  const getCurrentWeather = async () => {
    setIsLoading(true);
    const { data } = await axios('http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=auto:ip&days=5');
    setWeather(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);
  return (
    <ClimaProvider>
    <div className="container" style={{ backgroundColor: theme.background, color: theme.textColor }}>
      <div className="row">
        <div className="col col-md-6 col-sm-12">
        <Search />
        {isLoading ? <Loading /> : <WeatherCard weather={weather} />}
        </div>
        <div className="col col-md-6 col-sm-12 my-5">
        {isLoading ? <Loading /> : <Forecast weather={weather} />}
        {isLoading ? <Loading /> : <InfoCards weather={weather} />}
        </div>
      </div>
    </div>
    </ClimaProvider>
  );
};

export default HomePage;
