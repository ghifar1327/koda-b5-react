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
        <div className="border border-gray-400 py-[74px] px-[73px]">
        <div className="flex flex-col gap-[25px]  w-[400px]">
          <h1 className="text-3xl">Welcome Back 🙌</h1>
          <p className="text-gray-400 text-xl" >Sign in with your data that you entered during
your registration</p>
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={hendleChange}
              className="border w-[400px] text-4xl p-3"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={hendleChange}
              className="border w-[400px] text-4xl p-3"
            />
          </label>
          <div className="flex justify-end">
            <button className="text-blue-500">forget your password?</button>
          </div>
          <div>
            <button
              type="submit"
              className="rounded-sm bg-blue-600 text-white w-full p-1"
            >
              Submit
            </button>
          </div>
        </div>
        </div>
      </form>
    </>
  );
}
