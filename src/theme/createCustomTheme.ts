import { ThemeOptions, createTheme, responsiveFontSizes } from "@mui/material";

export const createCustomThemeOptions = (themeOptions: ThemeOptions) => {
  let theme = createTheme({ ...themeOptions });
  theme = responsiveFontSizes(theme);
  return theme;
};
