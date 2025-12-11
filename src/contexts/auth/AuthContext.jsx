/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext();

const initialState = { user: null };

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    case "EDIT_PROFILE":
      return { user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
}
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState, () => {
    const saved = localStorage.getItem("auth");
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(state));
  }, [state]);

  const login = (userData) => dispatch({ type: "LOGIN", payload: userData });
  const logout = () => {
    localStorage.removeItem("auth");
    dispatch({ type: "LOGOUT" });
  };
  const editProfile = (payload) => dispatch({ type: "EDIT_PROFILE", payload });

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout, editProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
