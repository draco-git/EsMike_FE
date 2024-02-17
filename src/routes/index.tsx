import { RouteObject } from "react-router-dom";
import { Profile } from "../pages/profile";
// import { LandingPage } from "../pages/landingPage";
import SignUp from "../widgets/signup/SignUp";
import { Login } from "../widgets/login";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/browse",
    Component: Profile,
  },
  {
    path: "/login",
    Component: Login,
  },
];

export { routes };
