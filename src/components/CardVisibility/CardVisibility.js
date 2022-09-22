import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardVisibility.css';

const CardVisibility = ({ visibility }) => {
  return (
        <Card style={{ width: '20rem' }} className="text-center cardComponent">
            <Card.Body>
                <Card.Title>Visibiliy</Card.Title>
                <p className='cardText'>{visibility} miles</p>
            </Card.Body>
        </Card>
  );
};

CardVisibility.defaultProps = {
  visibility: 'no disponible',
};

export default CardVisibility;
