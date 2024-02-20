import { RouteObject, useRoutes } from "react-router-dom";
import { Box } from "@mui/material";
import { isUserLogged } from "../../utils/isUserLogged.ts";
import { ProtectedNavbar } from "../protectedNavbar";

export interface AppRendererConfig {
  routes: RouteObject[];
}
export const AppRenderer = ({ routes }: AppRendererConfig) => {
  const content = useRoutes(routes);
  const isLogged = isUserLogged();

  if (!isLogged) return <>{content}</>;
  return (
    <>
      <ProtectedNavbar />
      <Box sx={{}}>{content}</Box>
    </>
  );
};
