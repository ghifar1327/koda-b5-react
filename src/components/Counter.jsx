import React, { useState } from "react";

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
     <h1 className="text-center">Counter</h1>
    <div className="flex justify-center items-center h-[80vh] text-9xl gap-5">
      <button onClick={des} className="bg-orange-500 px-15 rounded-3xl">-</button>
      <p>{counter}</p>
      <button onClick={inc} className="bg-purple-600 px-15 rounded-3xl">+</button>
    </div>
    </>
  );
}
