import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardWind.css';

const CardWind = ({ windSpeed }) => {
  return (
    <Card style={{ width: '20rem' }} className="text-center cardComponent">
      <Card.Body>
        <Card.Title>Wind status</Card.Title>
        <p className='cardText'>{windSpeed} MPH</p>
      </Card.Body>
    </Card>
  );
};

CardWind.defaultProps = {
  windSpeed: 'no disponible',
};

export default CardWind;
