import { ThemeProvider } from "@mui/material";
import { baseThemeOptions } from "./theme/themeConfig";
import { createCustomThemeOptions } from "./theme/createCustomTheme";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useLogin } from "./services/login";

const App = () => {
  const customTheme = createCustomThemeOptions(baseThemeOptions);
  const content = useRoutes(routes);
  const { data, status } = useLogin({
    email: "admin1@gmail.com",
    password: "admin1",
  });
  console.log("status: ", status);
  console.log("data: ", data);

  return <ThemeProvider theme={customTheme}>{content}</ThemeProvider>;
};

export default App;
