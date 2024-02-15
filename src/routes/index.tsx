import { RouteObject } from "react-router-dom";
import { Profile } from "../pages/profile";
import { LandingPage } from "../pages/landingPage";
const du = () => <>Dummy</>;
const routes: RouteObject[] = [
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/signup",
    Component: du,
  },
  {
    path: "/browse",
    Component: Profile,
  },
  {
    path: "/login",
    Component: LandingPage,
  },
];

export { routes };
