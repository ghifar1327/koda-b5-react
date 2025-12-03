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
    <form action="" className="flex justify-center" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insert Name..."
          className="border"
        />
        <textarea
          name="review"
          id=""
          placeholder="review"
          className="border"
        ></textarea>
        <div>
          <button className="bg-blue-600">submit</button>
        </div>
      </div>
    </form>
  );
}
