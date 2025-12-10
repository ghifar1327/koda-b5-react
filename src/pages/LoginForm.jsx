import React from "react";
import Header from "../components/Header";
import InputHandler from "../components/InputHandler";
import { useAuth } from "../contexts/auth/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();

  function handleLogin(data) {
    login({
      username: data.email,
    });
  }

  return (
    <>
      <Header title="Login" />
      <InputHandler setLogin={handleLogin} />
    </>
  );
}
