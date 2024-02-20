import ReactPlayer from "react-player";
import { Box, Button } from "@mui/material";
import "./dashboard.css";
import { useState } from "react";

const VideoPlayer = ({ playing }: { playing: boolean }) => {
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
        url="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
        loop
        playing={playing}
        width="100%"
        height="100%"
        className="react-player"
      />
    </Box>
  );
};

export const Dashboard = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  return (
    <>
      <VideoPlayer playing={playing} />
      <Button onClick={() => setPlaying(!playing)}>Play</Button>
    </>
  );
};
