import { ThemeProvider } from "@mui/material";
import { baseThemeOptions } from "./theme/themeConfig";
import { createCustomThemeOptions } from "./theme/createCustomTheme";
import { routes } from "./routes";
import { AppRenderer } from "./widgets/appRenderer";
const App = () => {
  const customTheme = createCustomThemeOptions(baseThemeOptions);

  return (
    <ThemeProvider theme={customTheme}>
      <AppRenderer routes={routes} />
    </ThemeProvider>
  );
};

export default App;
