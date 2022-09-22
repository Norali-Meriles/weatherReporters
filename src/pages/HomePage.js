import React, { useEffect, useState } from "react";
import axios from "axios";
import { WeatherCard } from "../components/WeatherCard";
import { Loading } from "../components/Loading";
import { Card } from "../components/Card";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  const getCurrentWeather = async () => {
    setIsLoading(true);
    const { data } = await axios(
      "http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=auto:ip"
    );
    setWeather(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);

  console.log(weather);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <WeatherCard weather={weather} />
          <Card className={"col-5 col-lg-2 "} weather={weather} />
        </>
      )}
    </div>
  );
};

export default HomePage;
