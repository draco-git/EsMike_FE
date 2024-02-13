import { Components, PaletteOptions } from "@mui/material";

const muiOverridenComponents = (palette?: PaletteOptions): Components => {
  console.log(palette);
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255,255,255,0.3)",
            },
          },
        },
      },
      defaultProps: {},
    },
  };
};

export { muiOverridenComponents };
