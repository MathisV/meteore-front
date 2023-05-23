import React from "react";

type CardProps = {
  imageSrc: string;
  imgAlt: string;
  title: string;
  symbol: string;
  price: number;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  imgAlt,
  title,
  symbol,
  price,
}) => {
  return (
    <div className="card">
      <img src={imageSrc} className="card-img-top" alt={imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{symbol}</p>
        <p className="card-text">${price}</p>
      </div>
    </div>
  );
};

export default Card;
