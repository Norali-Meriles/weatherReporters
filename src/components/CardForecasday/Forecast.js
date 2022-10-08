import CardForecasday from './CardForecasday';
import { useClimaContex } from '../../providers/ClimaProvider';

const Forecast = ({ weather }) => {
  const data = useClimaContex();

  return (
    <div>
     <section className="row justify-content-evenly ">
           { weather
             ? weather?.forecast?.forecastday.map((forecast) => (
            <CardForecasday
              key={forecast?.date_epoch}
              className={'col-5 col-lg-3  bg-darkblue-75'}
              forecast={forecast}
            />
             ))
             : data?.forecast?.forecastday.map((forecast) => (
            <CardForecasday
              key={forecast?.date_epoch}
              className={'col-5 col-lg-3  bg-darkblue-75'}
              forecast={forecast}
            />
             ))
           }
      </section>
    </div>
  );
};

export default Forecast;
