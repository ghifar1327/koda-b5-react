import React, { useState } from "react";
import Header from "../components/Header";
import InputReview from "../components/InputReview";

export default function HomePege() {
  const [review, setReview] = useState([]);
  return (
    <>
      <Header title={"Minitask 4"} />
      <InputReview setReview={setReview} />
      <div className="grid grid-cols-5">

      {review.map((item, index) => {
       return <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.review}</p>
        </div>;
      })}
      </div>
    </>
  );
}
