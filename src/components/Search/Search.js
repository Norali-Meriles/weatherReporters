import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useClimaToggleContex } from '../../providers/ClimaProvider';
import Select from './Select';

const Search = ({ location }) => {
  const [city, setCity] = useState();
  const [cityName, setCityName] = useState();
  const setDatoClima = useClimaToggleContex();

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
        `https://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${cityName}&aqi=no`,
      );
      setDatoClima(data);
    }
  };
  useEffect(() => {
    getCityByName();
  }, [cityName]);

  return (
    <div>
      <Select city={city} setCityName={setCityName} />
    </div>
  );
};

Search.defaultProps = { location: 'tuc' };

export default Search;
