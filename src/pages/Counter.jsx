import React, { useState } from "react";
import Header from "../components/Header";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const des = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <Header title="Counter Number" />
      <div className="h-screen flex justify-center flex-col items-center gap-40">
        <h1 className="text-center text-9xl">Counter</h1>
        <div className="flex justify-center items-center text-5xl gap-5">
          <button
            onClick={des}
            className="bg-orange-500  p-10 px-15 rounded-3xl"
          >
            -
          </button>
          <p className="text-9xl">{counter}</p>
          <button
            onClick={inc}
            className="bg-purple-600 p-10 px-14 rounded-3xl"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
