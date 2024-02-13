import { RouteObject } from "react-router-dom";
import { Login } from "../widgets/login/Login";
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
];

export { routes };
