import { RouteObject, useRoutes } from "react-router-dom";

export interface AppRendererConfig {
  routes: RouteObject[];
}
export const AppRenderer = ({ routes }: AppRendererConfig) => {
  const content = useRoutes(routes);
  return <>{content}</>;
};
