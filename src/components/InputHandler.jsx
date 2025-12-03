import React, { useState } from "react";

export default function InputHandler({ setLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    const userData = {};
    Object.assign(userData, { email: form.email });
    Object.assign(userData, { password: form.password });
    setLogin(userData);
    setForm({
      email: "",
      password: "",
    });
  }
  function hendleChange(e) {
    setForm((form) => {
      return { ...form, [e.target.name]: [e.target.value] };
    });
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex flex-col gap-3 border border-gray-400 p-5">
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={hendleChange}
              className="border"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={hendleChange}
              className="border"
            />
          </label>
          <div>
            <button
              type="submit"
              className="rounded-sm bg-blue-600 text-white w-full p-1"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
