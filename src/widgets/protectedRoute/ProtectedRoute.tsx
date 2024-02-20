import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { ReactElement } from "react";

export interface ProtectedRouteConfig {
  children: ReactElement;
}
export const ProtectedRoute = ({ children }: ProtectedRouteConfig) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/" />;
  }

  const decodedToken = jwtDecode(token);
  const expireTime = decodedToken.exp as number;
  const currTime = new Date().getTime() / 1000;
  if (expireTime < currTime) {
    localStorage.removeItem("accessToken");
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
