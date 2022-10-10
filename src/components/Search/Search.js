import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useClimaToggleContex } from '../../providers/ClimaProvider';
import Select from './Select';
import { useTheme } from '../../providers/ThemeProvider';

const Search = ({ location }) => {
  const [city, setCity] = useState();
  const [cityName, setCityName] = useState();
  const setDatoClima = useClimaToggleContex();
  const { theme } = useTheme();

  const searchCity = async () => {
    const { data } = await axios(
      `http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=${location}`,
    );
    setCity(data);
  };

  useEffect(() => {
    searchCity();
  }, []);

  const getCityByName = async () => {
    if (cityName) {
      const { data } = await axios(
        `http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=${cityName}&days=5&aqi=no&alerts=no`,
      );
      setDatoClima(data);
    }
  };
  useEffect(() => {
    getCityByName();
  }, [cityName]);

  return (
    <div className="my-3">
      <Select city={city} setCityName={setCityName}
      style={{ backgroundColor: theme.background, color: theme.textColor }} />
    </div>
  );
};

Search.defaultProps = { location: 'tuc' };

export default Search;
