import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Router from "./Router.jsx";
import ThemeProvider from "./contexts/theme/ThemeProvider.jsx";
import { AuthProvider } from "./contexts/auth/AuthContext.jsx";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ReduxProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
