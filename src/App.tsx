import { ThemeProvider } from "@mui/material";
import { baseThemeOptions } from "./theme/themeConfig";
import { createCustomThemeOptions } from "./theme/createCustomTheme";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  const customTheme = createCustomThemeOptions(baseThemeOptions);
  const content = useRoutes(routes);

  return <ThemeProvider theme={customTheme}>{content}</ThemeProvider>;
};

export default App;
