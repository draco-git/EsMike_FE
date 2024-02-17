import { Components, PaletteOptions } from "@mui/material";

const muiOverridenComponents = (palette?: PaletteOptions): Components => {
  console.log(palette);
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255,255,255, 0.3)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255,255,255)",
            },
            "&.Mui-active fieldset": {
              borderColor: "rgba(255,255,255)",
            },
            ":hover fieldset": {
              borderColor: "rgba(255,255,255, 0.7)",
            },
          },
        },
      },
      defaultProps: {},
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  };
};

export { muiOverridenComponents };
