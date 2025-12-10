import { Routes, Route } from "react-router";
import RickAndMorty from "./pages/RickAndMorty";
import DataProduct from "./pages/DataProduct";
import Counter from "./pages/Counter";
import LoginForm from "./pages/LoginForm";
import App from "./App";
import DetailCharacter from "./components/DetailCharacter";
import FormSurvey from "./pages/FormSurvey";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/minitask1" element={<Counter />} />
      <Route path="/minitask2" element={<DataProduct />} />
      <Route path="/minitask3">
        <Route index element={<RickAndMorty />} />
        <Route path="detail/:id" element={<DetailCharacter />} />
      </Route>
      <Route path="/formsurvey" element={<FormSurvey/>}/>
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}
