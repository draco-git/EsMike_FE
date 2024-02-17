import { RouteObject } from "react-router-dom";
import { Profile } from "../pages/profile";
import SignUp from "../widgets/signup/SignUp";
import { LandingPage } from "../pages/landingPage";
import { Login } from "../widgets/login";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: LandingPage,
    children: [
      {
        path: "login",
        Component: Login,
      },
    ],
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/browse",
    Component: Profile,
  },
];

export { routes };
