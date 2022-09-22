import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardPressure.css';

const CardWind = ({ pressure }) => {
  return (
    <Card style={{ width: '20rem' }} className="text-center cardComponent">
      <Card.Body>
        <Card.Title>Air Pressure</Card.Title>
        <p className='cardText'>{pressure} mb</p>
      </Card.Body>
    </Card>
  );
};

CardWind.defaultProps = {
  pressure: 'no disponible',
};

export default CardWind;
