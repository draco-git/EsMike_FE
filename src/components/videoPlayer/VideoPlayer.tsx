import { Box } from "@mui/material";
import ReactPlayer from "react-player";

export interface VideoPlayerConfig {
  playing: boolean;
  url: string;
}

const VideoPlayer = ({ playing, url }: VideoPlayerConfig) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "600px",
        position: "relative",
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
