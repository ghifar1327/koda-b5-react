import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Router from "./Router.jsx";
import ThemeProvider from "./contexts/theme/ThemeProvider.jsx";
import { AuthProvider } from "./contexts/auth/AuthContext.jsx";
import { Provider as ReduxProvider } from "react-redux";
import store, { persistedStore } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ReduxProvider store={store}>
          <PersistGate persistor={persistedStore}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </PersistGate>
        </ReduxProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
