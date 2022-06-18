import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};