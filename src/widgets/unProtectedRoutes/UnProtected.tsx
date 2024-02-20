import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export interface UnProtectedRouteConfig {
  children: JSX.Element;
}
export const UnProtectedRoute = ({ children }: UnProtectedRouteConfig) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    const decodedToken = jwtDecode(token);
    const expireTime = decodedToken.exp as number;
    const currTime = new Date().getTime() / 1000;
    if (expireTime > currTime) {
      return <Navigate to="/browse" />;
    }
  }

  return <>{children}</>;
};
