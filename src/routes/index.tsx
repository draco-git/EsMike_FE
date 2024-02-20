import { RouteObject } from "react-router-dom";
import { Profile } from "../pages/profile";
import SignUp from "../widgets/signup/SignUp";
import { LandingPage } from "../pages/landingPage";
import { Login } from "../widgets/login";
import { ProtectedRoute } from "../widgets/protectedRoute";
import { UnProtectedRoute } from "../widgets/unProtectedRoutes/UnProtected";
import { Dashboard } from "../pages/dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: () => (
      <UnProtectedRoute>
        <LandingPage />
      </UnProtectedRoute>
    ),
    children: [
      {
        path: "login",
        Component: () => (
          <UnProtectedRoute>
            <Login />
          </UnProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/signup",
    Component: () => (
      <UnProtectedRoute>
        <SignUp />
      </UnProtectedRoute>
    ),
  },
  {
    path: "/browse",
    Component: () => (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    Component: () => (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
];

export { routes };
