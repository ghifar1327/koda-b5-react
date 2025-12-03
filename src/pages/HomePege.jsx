import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import InputReview from "../components/InputReview";

export default function HomePege() {
  const [review, setReview] = useState(() => {
    return JSON.parse(localStorage.getItem("reviews")) || [];
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(review));
  }, [review]);
  return (
    <>
      <Header title="Minitask 4" />
      <main className="p-20 flex gap-5">
        <div className="grid grid-cols-5 bg-amber-300 w-[75%] h-[70vh] p-10 border-4 rounded-4xl">
          {review.map((item, index) => {
            return (
              <div key={index} className="bg-amber-100 h-40 rounded-2xl p-2">
                <h3 className="text-center p-2">{item.name}</h3>
                <hr />
                <p className="p-2">{item.review}</p>
              </div>
            );
          })}
        </div>
        <InputReview setReview={setReview} />
      </main>
    </>
  );
}
