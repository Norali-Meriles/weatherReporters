import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './CardHumidity.css';

const CardHumidity = ({ humidity }) => {
  return (
        <Card style={{ width: '20rem' }} className="text-center cardComponent">
            <Card.Body>
                <Card.Title>Humidity</Card.Title>
                <p className='cardText'>{humidity} %</p>
                <ProgressBar animated now={humidity} />
            </Card.Body>
        </Card>
  );
};
CardHumidity.defaultProps = {
  humidity: 0,
};

export default CardHumidity;
