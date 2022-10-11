import React from 'react';
import moment from 'moment';
import { useClimaContex } from '../../providers/ClimaProvider';
import { useTheme } from '../../providers/ThemeProvider';

const WeatherCard = ({ weather }) => {
  const data = useClimaContex();
  const { theme } = useTheme();
  const date = moment(data ? data.current?.last_updated : weather.current?.last_updated).format('ddd DD MMM ');
  return (
    <div className="card current-card d-flex" style={{ backgroundColor: theme.background, color: theme.textColor }}>
      <div className="d-flex justify-content-center">
      <img
        src={data ? data.current?.condition.icon : weather.current?.condition.icon}
        className="current-img my-3"
        alt={data ? data.current?.condition.text : weather.current?.condition.text}
      />
      </div>
      <div className="card-body">
        <h2 className="card-title">{data ? data.current?.feelslike_c : weather.current?.feelslike_c}ºC</h2>
        <h5 className="card-text">{data ? data.current?.condition.text : weather.current?.condition.text}</h5>
        <p>Today - {date}</p>
        <p>
          <i className='bi bi-geo-alt-fill'></i>{' '}
          {data ? data.location?.tz_id : weather.location?.tz_id} -{' '}
          {data ? data.location?.name : weather.location?.name}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
