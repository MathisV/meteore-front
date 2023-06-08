import React from "react";
import "../styles/Card.css";

type CardProps = {
  title: string;
  value: string;
  icon: string;
  valueMin: string;
  valueMax: string;
};

const Card: React.FC<CardProps> = ({
  title,
  value,
  icon,
  valueMin,
  valueMax,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-temperature">{value}</p>
        <img src={icon} className="card-icon" alt={icon} />
        <p className="temperatureMin">{valueMin}</p>
        <p className="temperatureMax">{valueMax}</p>
      </div>
    </div>
  );
};

export default Card;
