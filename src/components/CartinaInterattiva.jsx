import React from "react";

const CartinaInterattiva = () => {
  return (
    <div className="cartina-interattiva-container">
      <h2 className="mb-4">Cartina Meteo Interattiva</h2>
      <iframe className="border"
        width="100%"
        height="100%"
        src="https://embed.windy.com/embed2.html?lat=42.156&lon=12.709&detailLat=-7.388&detailLon=88.928&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
        title="Windy Map"
      ></iframe>
    </div>
  );
};

export default CartinaInterattiva;
