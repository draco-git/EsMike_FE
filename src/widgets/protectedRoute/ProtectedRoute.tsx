import { Navigate } from "react-router-dom";

export interface ProtectedRouteConfig {
  children: JSX.Element;
}
export const ProtectedRoute = ({ children }: ProtectedRouteConfig) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
