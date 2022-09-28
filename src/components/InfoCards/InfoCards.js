import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './InfoCards.css';

const InfoCards = ({
  humidity, windSpeed, visibility, pressure,
}) => {
  return (
        <Container className='container text-center'>
            <Row className="justify-content-md-center">
                <Col>
                    <Card className="text-center ">
                        <Card.Body>
                            <Card.Title>Humidity</Card.Title>
                            <p className='cardText'>{humidity} %</p>
                            <ProgressBar animated now={humidity} />
                        </Card.Body>
                    </Card>
                    <Card className="text-center ">
                        <Card.Body>
                            <Card.Title>Air Pressure</Card.Title>
                            <p className='cardText'>{pressure} mb</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center ">
                        <Card.Body>
                            <Card.Title>Visibiliy</Card.Title>
                            <p className='cardText'>{visibility} miles</p>
                        </Card.Body>
                    </Card>
                    <Card className="text-center ">
                        <Card.Body>
                            <Card.Title>Wind Speed</Card.Title>
                            <p className='cardText'>{windSpeed} miles</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
  );
};
InfoCards.defaultProps = {
  humidity: 0,
  windSpeed: 'no disponible',
  visibility: 'no disponible',
  pressure: 'no disponible',
};
export default InfoCards;
