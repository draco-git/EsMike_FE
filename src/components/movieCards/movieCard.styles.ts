import { SxProps, Theme } from "@mui/material";

export const movieCardContainer: SxProps<Theme> = {
  ":hover": {
    transform: "scale(1.6)",
    transformOrigin: "50 50",
    transition: "transform 0.4s ease-in-out",
    "& > .content": {
      transform: "unset",
    },
  },
  overflowX: "hidden",
};

export const movieCardsListContainer: SxProps<Theme> = {
  display: "flex",
};
