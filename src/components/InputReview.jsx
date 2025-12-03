import React from "react";

export default function InputReview({ setReview }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {};
    Object.assign(newReview, { name: event.target["name"].value });
    Object.assign(newReview, { review: event.target["review"].value });
    setReview((review) => {
      return [...review, newReview];
    });
    event.target["name"].value = "";
    event.target["review"].value = "";
    console.log(newReview)
  };
  return (
    <form action="" className="flex justify-center bg-amber-300 w-[30%] border-4 rounded-4xl p-10" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 w-full">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insert Name..."
          className=" bg-amber-100 border-2 px-2 rounded-2xl"
        />
        <textarea
          name="review"
          id=""
          placeholder="review"
          className=" bg-amber-100 border-2 px-2 rounded-2xl h-[70%] p-1"
        ></textarea>
        <div>
          <button className="bg-amber-700 w-full p-1 rounded-2xl text-amber-100 cursor-pointer">submit</button>
        </div>
      </div>
    </form>
  );
}
