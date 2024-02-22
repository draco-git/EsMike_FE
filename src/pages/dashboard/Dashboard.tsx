import { Button, Typography } from "@mui/material";
import { useState } from "react";
// import { VideoPlayer } from "../../components/videoPlayer";
import { Slider } from "../../components/slider/Slider";

export const Dashboard = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  return (
    <>
      {/* <VideoPlayer
        playing={playing}
        url="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
        customSx={{}}
      /> */}
      <Typography mb="100px"> {}</Typography>
      <Button onClick={() => setPlaying(!playing)}>Play</Button>
      <Slider />
    </>
  );
};
