import React from "react";

export default function CardBody({ cards }) {
    if (cards.length === 0) {
    return <p className="text-gray-500 text-center">Charcter not found!</p>;
  }
  return (
    <>
      <figure className="grid grid-cols-5 gap-5">
        {cards.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>status: {item.status}</p>
            </div>
          );
        })}
      </figure>
    </>
  );
}
