import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";

export default function InputHandler({ setLogin }) {
  const email = useInput("", true);
  const password = useInput("");
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setLogin({ email: email.value, password: password.value });
    email.reset();
    password.reset();
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-20">
      <div className="border p-10 w-[400px] flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Welcome Back 🙌</h1>

        <label>
          <p>Email</p>
          <input
            type="email"
            value={email.value}
            onChange={email.onChange}
            className="border p-2 w-full"
          />
        </label>

        <label>
          <p>Password</p>
          <input
            type="password"
            value={password.value}
            onChange={password.onChange}
            className="border p-2 w-full"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
