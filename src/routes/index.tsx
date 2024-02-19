import { RouteObject } from "react-router-dom";
import { Profile } from "../pages/profile";
import SignUp from "../widgets/signup/SignUp";
import { LandingPage } from "../pages/landingPage";
import { Login } from "../widgets/login";
import { ProtectedRoute } from "../widgets/protectedRoute";
import { UnProtectedRoute } from "../unProtectedRoutes/UnProtected";

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
];

export { routes };
