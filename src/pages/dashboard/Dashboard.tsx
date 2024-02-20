import { Button } from "@mui/material";
import { useState } from "react";
import "./dashboard.css";
import { VideoPlayer } from "../../components/videoPlayer";

export const Dashboard = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  return (
    <>
      <VideoPlayer
        playing={playing}
        url="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
      />
      <Button onClick={() => setPlaying(!playing)}>Play</Button>
    </>
  );
};
