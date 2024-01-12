import Preferiti from "./Preferiti"
import Comuni from "./Comuni"
import CartinaInterattiva from "./CartinaInterattiva"
import Dettagli from "./Dettagli"
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
    const [weatherData, setWeatherData] = useState(null);

  const handleWeatherDataChange = (data) => {
    setWeatherData(data);
  }
  return (
    <Container fluid>
      <Row>
        <Col md={9} className="p-4">
          <Comuni onWeatherDataChange={handleWeatherDataChange} />
          {weatherData && <Dettagli data={weatherData} />}
          <CartinaInterattiva />
        </Col>
        <Col md={3} className="bg-light p-4">
          <Preferiti />
        </Col>
      </Row>
    </Container>
  );
  
}
export default Home