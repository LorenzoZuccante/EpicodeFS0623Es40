import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

const Dettagli = ({ data }) => {
  const [buttonColors, setButtonColors] = useState({
    button1: "success",
    button2: "secondary",
    button3: "secondary",
  });

  const [selectedDay, setSelectedDay] = useState(0);

  const convertToFahrenheitToCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return `${celsius.toFixed(1)} C°`;
  };

  const handleButtonClick = (button, dayIndex) => {
    setButtonColors((prevColors) => {
      const newColors = {
        button1: "secondary",
        button2: "secondary",
        button3: "secondary",
      };
      newColors[button] =
        prevColors[button] === "secondary" ? "success" : "secondary";
      return newColors;
    });

    setSelectedDay(dayIndex);
  };

  const handleAddToFavorites = () => {
    const favoriteData = {
      address: data.address,
      temperature: convertToFahrenheitToCelsius(data.days[selectedDay].temp),
      rainyprob: `${data.days[selectedDay].precipprob}%`,
      windspeed: `${data.days[selectedDay].windspeed} km/h`,
    };

    const favoriteKey = "favoriteWeatherData";
    let favorites = JSON.parse(localStorage.getItem(favoriteKey)) || [];

    favorites.push(favoriteData);

    localStorage.setItem(favoriteKey, JSON.stringify(favorites));

    alert("Località aggiunta ai preferiti!");
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{data.address}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <strong>Temperatura:</strong>{" "}
            {convertToFahrenheitToCelsius(data.days[selectedDay].temp)}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Temperatura (min):</strong>{" "}
            {convertToFahrenheitToCelsius(data.days[selectedDay].tempmin)}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Temperatura (max):</strong>{" "}
            {convertToFahrenheitToCelsius(data.days[selectedDay].tempmax)}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Percepita:</strong>{" "}
            {convertToFahrenheitToCelsius(data.days[selectedDay].feelslike)}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Umidità:</strong> {data.days[selectedDay].humidity} %
          </ListGroupItem>
          <ListGroupItem>
            <strong>Probabilità di pioggia:</strong>{" "}
            {data.days[selectedDay].precipprob} %
          </ListGroupItem>
          <ListGroupItem>
            <strong>Quantità precipitazioni:</strong>{" "}
            {data.days[selectedDay].precipcover} mm
          </ListGroupItem>
          <ListGroupItem>
            <strong>Velocità vento:</strong>{" "}
            {data.days[selectedDay].windspeed} km/h
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Button
          variant={buttonColors.button1}
          onClick={() => handleButtonClick("button1", 0)}
          className="mr-2"
        >
          oggi
        </Button>
        <Button
          variant={buttonColors.button2}
          onClick={() => handleButtonClick("button2", 1)}
          className="mr-2"
        >
          domani
        </Button>
        <Button
          variant={buttonColors.button3}
          onClick={() => handleButtonClick("button3", 2)}
        >
          dopodomani
        </Button>
        <Button
          variant="info"
          onClick={handleAddToFavorites}
        >
          Aggiungi ai Preferiti
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Dettagli;
