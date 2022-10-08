import React from 'react';
import moment from 'moment';

const CardForecasday = ({ className, forecast }) => {
  const date = moment(forecast?.date).format('ddd DD MMM ');
  return (
    <article
      className={` ${className} cardBody card d-flex align-items-center` }
    >

       <h4 className="card-title text-center pt-3"> {date}</h4>
      <img
        src={forecast?.day?.condition?.icon}
        className="w-50"
        alt="Weather"
      />
      <section className="card-body text d-flex ">
        <p className="me-2 my-0 ">
          {forecast?.day?.maxtemp_c}°C
        </p>
        <p className="ms-2 my-0">
          {forecast?.day?.mintemp_c}°C
        </p>
      </section>
    </article>
  );
};
export default CardForecasday;
