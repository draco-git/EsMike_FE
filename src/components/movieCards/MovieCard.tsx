import { Box, Button, Popover } from "@mui/material";
import { useRef, useState } from "react";
import { movieCardsListContainer } from "./movieCard.styles.ts";

const MovieImage = () => {
  return (
    <Box
      component="img"
      src="https://stable-diffusion-art.com/wp-content/uploads/2023/07/image-136-1024x683.png"
      alt="Paella dish"
      sx={{ backgroundSize: "cover", width: "100%" }}
    />
  );
};
const MovieCardWithActions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        pointerEvents: "auto",
      }}
    >
      <Box>
        <MovieImage />
        <Box className="content">
          <Button>Madhav</Button>
        </Box>
      </Box>
    </Box>
  );
};

export const MovieCard = () => {
  const movieCardImage = useRef<HTMLDivElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = () => {
    if (movieCardImage.current) setAnchorEl(movieCardImage.current);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={movieCardsListContainer}>
        <Box
          ref={movieCardImage}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          width={225}
        >
          <MovieImage />
        </Box>

        <Popover
          anchorEl={anchorEl}
          open={!!anchorEl}
          marginThreshold={50}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Box
            sx={{
              width: 350,
              pointerEvents: "auto",
            }}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <MovieCardWithActions />
          </Box>
        </Popover>
      </Box>
    </>
  );
};
