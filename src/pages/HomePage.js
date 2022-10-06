import React, { useEffect, useState } from 'react';
import { WeatherCard } from '../components/WeatherCard';
import { Loading } from '../components/Loading';
import useFetch from '../hooks/CustomFetch/useFetch';
import { Search } from '../components/Search';
import { ClimaProvider } from '../providers/ClimaProvider';
import InfoCards from '../components/InfoCards/InfoCards';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  const getCurrentWeather = async () => {
    try {
      setIsLoading(true);
      const { data } = await useFetch('http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=auto:ip');
      setWeather(data);
      setIsLoading(false);
    } catch (error) {
      console.log('datos no disponibles');
    }
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
