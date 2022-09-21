import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const WeatherCard = ({ weather }) => {
  return (
    <div className="card">
  <img src={weather.current?.condition.icon} className="card-img-top w-25" alt="condition icon" />
  <div className="card-body">
    <h2 className="card-title">{weather.current?.feelslike_c}ºC</h2>
    <h5 className="card-text">{weather.current?.condition.text}</h5>
    <p>{weather.current?.last_updated}</p>
    <p><i className="bi bi-geo-alt-fill"></i> {weather.location?.tz_id} - {weather.location?.name}</p>
  </div>
</div>
  );
};

export default WeatherCard;
