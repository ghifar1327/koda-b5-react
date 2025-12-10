import React from "react";
import { Link } from "react-router";

export default function CardBody({ cards }) {
    if (cards.length === 0) {
    return <p className="text-gray-500 text-center">Charcter not found!</p>;
  }
  return (
    <>
      <figure className="grid grid-cols-5 gap-5">
        {cards.map((item, index) => {
          return (
            <Link to={`/minitask3/detail/${item.id}`} key={item.id} >
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>species: {item.species}</p>
            </div>
            </Link>
          );
        })}
      </figure>
    </>
  );
}
