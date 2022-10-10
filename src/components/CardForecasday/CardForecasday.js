import React from 'react';
import moment from 'moment';

const CardForecasday = ({ forecast, className }) => {
  const date = moment(forecast?.date).format('ddd DD MMM ');
  return (
<div className={` ${className} cardBody card d-flex align-items-center`}>
<h5 className="card-title text-center pt-3">{date}</h5>
  <img src={forecast?.day?.condition?.icon} className="w-50" alt="..."/>
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
