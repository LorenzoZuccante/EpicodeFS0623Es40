import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Preferiti = () => {
  const [preferiti, setPreferiti] = useState([]);

  const handleStorageChange = () => {
    const favoriteKey = "favoriteWeatherData";
    const favorites = JSON.parse(localStorage.getItem(favoriteKey)) || [];
    setPreferiti(favorites);
  };

  useEffect(() => {
    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); 

  const handleRemoveFromFavorites = (index) => {
    const updatedFavorites = [...preferiti];
    updatedFavorites.splice(index, 1);
    setPreferiti(updatedFavorites);
    const favoriteKey = "favoriteWeatherData";
    localStorage.setItem(favoriteKey, JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2 className="mb-4">Preferiti</h2>
      {preferiti.map((preferito, index) => (
        <div key={index} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{preferito.address}</Card.Title>
              <Card.Text>
                <strong>Temperatura:</strong> {preferito.temperature}
                <br />
                <strong>Probabilità di pioggia:</strong> {preferito.rainyprob}
                <br />
                <strong>Velocità vento:</strong> {preferito.windspeed}
              </Card.Text>
              <Button
                variant="danger"
                onClick={() => handleRemoveFromFavorites(index)}
              >
                Rimuovi dai Preferiti
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Preferiti;
