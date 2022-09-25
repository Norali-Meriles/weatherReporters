import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from './Select';

const Search = ({ location }) => {
  const [city, setCity] = useState();
  const [cityName, setCityName] = useState();
  // const [infoCity, setInfoCity] = useState();

  const searchCity = async () => {
    const { data } = await axios(`http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=${location}`);
    console.log(data);
    setCity(data);
  };

  useEffect(() => {
    searchCity();
  }, []);

  console.log(cityName);

  const getCityByName = async () => {
    const { info } = await axios(`http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=${cityName}&aqi=no`);
    console.log(info);
    // setInfoCity(info);
  };

  useEffect(() => {
    getCityByName();
  }, []);

  // console.log(infoCity);

  return (
    <div>
    <Select city={city} setCityName={setCityName}/>
    </div>
  );
};

Search.defaultProps = { location: 'tuc' };

export default Search;
