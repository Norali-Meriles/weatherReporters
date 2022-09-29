import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherCard } from '../components/WeatherCard';
import { Loading } from '../components/Loading';
import { Search } from '../components/Search';
import { ClimaProvider } from '../providers/ClimaProvider';
import InfoCards from '../components/InfoCards/InfoCards';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  const getCurrentWeather = async () => {
    setIsLoading(true);
    const { data } = await axios('http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=auto:ip');
    setWeather(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);

  return (
    <ClimaProvider>
    <div className="container">
      <div className="row">
        <div className="col-6">
        <Search />
        {isLoading ? <Loading /> : <WeatherCard weather={weather} />}
        </div>
        <div className="col-6">
          <div>aca va componente de Norali</div>
          <br />
          <br />
          <br />
          <div>
            <InfoCards />
          </div>
        </div>
      </div>
    </div>
    </ClimaProvider>
  );
};

export default HomePage;
