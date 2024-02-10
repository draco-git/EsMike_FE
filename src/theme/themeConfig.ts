import { ThemeOptions } from "@mui/material";
import { muiOverridenComponents } from "./muiOverrides";

const baseThemeOptions: ThemeOptions = {
  direction: "ltr",
  spacing: 16,
  components: muiOverridenComponents(),
  palette: {
    primary: {
      main: "rgb(193,17,25)",
    },
  },
};

export { baseThemeOptions };
