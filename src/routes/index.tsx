import { RouteObject } from "react-router-dom";
import { Login } from "../widgets/login/Login";
import { Profile } from "../pages/profile";
const du = () => <>Dummy</>;
const routes: RouteObject[] = [
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/signup",
    Component: du,
  },
  {
    path: "/browse",
    Component: Profile,
  },
];

export { routes };
