import { Box, Button, Popover } from "@mui/material";
import { useRef, useState } from "react";
import { movieCardsListContainer } from "./movieCard.styles.ts";

export const MovieCard = () => {
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
        <Box
          component="img"
          src="https://stable-diffusion-art.com/wp-content/uploads/2023/07/image-136-1024x683.png"
          alt="Paella dish"
          sx={{ backgroundSize: "cover", width: "100%" }}
        />
        <Box className="content">
          <Button>Madhav</Button>
        </Box>
      </Box>
    </Box>
  );
};

export const MovieCardImage = () => {
  return (
    <Box sx={{ width: 225 }}>
      <Box
        component="img"
        src="https://stable-diffusion-art.com/wp-content/uploads/2023/07/image-136-1024x683.png"
        alt="Paella dish"
        sx={{ backgroundSize: "cover", width: "100%" }}
      />
    </Box>
  );
};

export const MovieCards = () => {
  const movieCardImage = useRef<HTMLDivElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = () => {
    console.log("hrere");
    if (movieCardImage.current) setAnchorEl(movieCardImage.current);
  };

  const handlePopoverClose = () => {
    console.log("close");
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={movieCardsListContainer}>
        <Box
          ref={movieCardImage}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <MovieCardImage />
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
            <MovieCard />
          </Box>
        </Popover>
      </Box>
    </>
  );
};
