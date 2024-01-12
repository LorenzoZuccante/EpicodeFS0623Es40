import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from 'react-bootstrap';

const Comuni = ({ onWeatherDataChange }) => {

  const [localita, setLocalita] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (e) => {
    setLocalita(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiKey = "D4K6S5FNS8HLBSCFJLML2AFDC";
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${localita}?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setWeatherData(data);

      onWeatherDataChange(data);
    } catch (error) {
      console.error("Errore nella chiamata all'API:", error);
      alert(`Errore nella digitazione: ${error.message}`);
    }
  };

  return (

      <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Inserisci la località da ricercare</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formLocalita">
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci la località"
                value={localita}
                onChange={handleInputChange}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Invia
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};



export default Comuni;
