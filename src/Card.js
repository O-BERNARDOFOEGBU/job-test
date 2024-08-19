import React from "react";

const Card = ({ name, phone, email, country, currency }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Country: {country}</p>
      <p>Discounted Currency: {currency}</p>
    </div>
  );
};

export default Card;
