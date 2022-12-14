import React from 'react';
import moment from 'moment';
import { useTheme } from '../../providers/ThemeProvider';

const CardForecasday = ({ forecast, className, i }) => {
  const { theme } = useTheme();
  const date = moment(forecast?.date).format('ddd DD MMM ');
  return (
<div className={` ${className} cardBody card d-flex align-items-center my-2`} style={{ backgroundColor: theme.background, color: theme.textColor }} >
{i <= '0' ? <h5 className="card-title text-center pt-3">Today</h5>
  : <h5 className="card-title text-center pt-3">{date}</h5>}
  <img src={forecast?.day?.condition?.icon} className="w-50" alt="forecast?.day?.condition?.name"/>
  <div className="card-body  d-flex">
  <p className="me-2 my-0 ">
  {forecast?.day?.maxtemp_c}°C
        </p>
         <p className="ms-2 my-0">
         {forecast?.day?.mintemp_c}°C
         </p>
  </div>
</div>

  );
};
export default CardForecasday;
