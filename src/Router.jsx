import React from "react";
import { Routes, Route } from "react-router";
import RickAndMorty from "./pages/RickAndMorty";
import DataProduct from "./pages/DataProduct";
import Counter from "./pages/Counter";
import App from "./App";
import LoginForm from "./pages/LoginForm";

export default function Router() {
  return <>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/minitask1" element={<Counter />} />
      <Route path="/minitask2" element={<DataProduct />} />
      <Route path="/minitask3" element={<RickAndMorty />} />
      <Route path="/LoginForm" element={<LoginForm />} />
    </Routes>
  </>;
}
