import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { useClimaContex } from '../../providers/ClimaProvider';

const InfoCards = ({ weather }) => {
  const data = useClimaContex();
  const { theme } = useTheme();
  return (
        <div className='container text-center'>
            <div className="row justify-content-md-center">
                <div className="col-12 my-3">
                    <h4>Today`s highlights</h4>
                </div>
                <div className="col">
                    <div className="card text-center my-2 mx-2" style={{ backgroundColor: theme.background, color: theme.textColor }}>
                        <div className="card-body">
                            <div className="card-title"><b>Humidity</b></div>
                            <p className='cardText'>{data ? data.current?.humidity : weather.current?.humidity} %</p>
                        </div>
                    </div>
                    <div className="card text-center my-2 mx-2" style={{ backgroundColor: theme.background, color: theme.textColor }}>
                    <div className="card-body">
                    <div className="card-title"><b>Pressure</b></div>
                            <p className='cardText'>{data ? data.current?.pressure_mb : weather.current?.pressure_mb} mb</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center my-2 mx-2" style={{ backgroundColor: theme.background, color: theme.textColor }}>
                    <div className="card-body">
                    <div className="card-title"><b>Visibility</b></div>
                            <p className='cardText'>{data ? data.current?.vis_km : weather.current?.vis_km} km</p>
                        </div>
                    </div>
                    <div className="card text-center my-2 mx-2" style={{ backgroundColor: theme.background, color: theme.textColor }}>
                    <div className="card-body">
                    <div className="card-title"><b>Wind Speed</b></div>
                            <p className='cardText'>{data ? data.current?.wind_kph : weather.current?.wind_kph} km/h</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default InfoCards;
