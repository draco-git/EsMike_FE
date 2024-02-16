import { RouteObject, useLocation } from "react-router-dom";
import { Profile } from "../pages/profile";
import { LandingPage } from "../pages/landingPage";

const DUu = () => {
  const location = useLocation();
  console.log(location.state);
  return <>dumy</>;
};

const routes: RouteObject[] = [
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/signup",
    Component: DUu,
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
