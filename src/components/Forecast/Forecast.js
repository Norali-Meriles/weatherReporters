import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardForecasday from '../CardForecasday/CardForecasday';

const Forecast = () => {
  const geolocationAPI = navigator.geolocation;
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [weeklyForecast, setWeeklyForecast] = useState();
  const key = '6be8c28794924ed8a2a184922222905 ';

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.error('Geolocation API is not available in your browser!');
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const currentCoords = position.coords;
        console.log(currentCoords);
        setCoords({ lat: currentCoords.latitude, lon: currentCoords.longitude });
      }, (error) => {
        console.error('Something went wrong getting your position!', error);
      });
    }
  };

  useEffect(() => {
    getUserCoordinates();
  }, [coords?.lat, coords?.lon]);

  const getClima = async () => {
    const response = await axios(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${coords.lat},${coords.lon}&days=5`);
    const { forecast } = response.data;
    console.log(response.data);
    setWeeklyForecast(forecast.forecastday);
  };

  useEffect(() => {
    getClima();
  }, []);
  return (
    <div>
     {coords.lat !== null && <section className="row justify-content-evenly justify-content-lg-between">
        { weeklyForecast?.map((forecast) => (
          <CardForecasday
            key={forecast?.date_epoch}
            className={'col-5 col-lg-2  bg-darkblue-75'}
            forecast={forecast}
          />
        ))}
      </section>}
    </div>
  );
};

export default Forecast;
