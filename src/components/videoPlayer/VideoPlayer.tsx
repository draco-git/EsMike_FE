import { Box, SxProps, Theme } from "@mui/material";
import ReactPlayer from "react-player";
import "./videoPlayer.css";

export interface VideoPlayerConfig {
  playing: boolean;
  url: string;
  customSx?: SxProps<Theme>;
}

const VideoPlayer = ({ playing, url, customSx }: VideoPlayerConfig) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        position: "relative",
        ...customSx,
      }}
      className="player-wrapper"
    >
      <ReactPlayer
        url={url}
        loop
        playing={playing}
        width="100%"
        height="100%"
        className="react-player"
      />
    </Box>
  );
};

export { VideoPlayer };
