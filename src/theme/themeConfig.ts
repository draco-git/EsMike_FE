import { ThemeOptions } from "@mui/material";
import { muiOverridenComponents } from "./muiOverrides";
import { typography } from "./customTypography";

const baseThemeOptions: ThemeOptions = {
  direction: "ltr",
  spacing: 16,
  components: muiOverridenComponents(),
  palette: {
    primary: {
      main: "rgb(193,17,25)",
    },
  },
  typography: typography,
};

export { baseThemeOptions };
