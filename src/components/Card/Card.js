import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Card = ({ className, weather }) => {
  console.log(weather);
  console.log(weather?.forecast?.forecastday?.[0]?.day);
  return (
    <article
      className={`card mt-3 ${className} bg-primary d-flex align-items-center`}
    >
      <h5 className="card-title text-center pt-3"> {weather.location?.name}</h5>
      <img
        src={weather?.forecast?.forecastday?.[0]?.day?.condition?.icon}
        className="w-50"
        alt="Weather"
      />
      <section className="card-body text d-flex ">
        <p className="me-2 my-0 ">
          {weather?.forecast?.forecastday?.[0]?.day?.maxtemp_c}°C
        </p>
        <p className="ms-2 my-0">
          {weather?.forecast?.forecastday?.[0]?.day?.mintemp_c}°C
        </p>
      </section>
    </article>
  );
};
export default Card;
