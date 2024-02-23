import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const MovieCard = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  const [showActions, setShowActions] = useState(false);
  return (
    <Card
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      sx={{
        // width: "100%",
        borderRadius: "6px",
        boxShadow: "none",
        transformOrigin: "50 50",
        background: "blue",
        // pointerEvents: "none",
      }}
    >
      <CardMedia component="img" height="50" image="cdcd" alt="Paella dish" />
      {showActions && (
        <>
          <CardContent>a,cdjb</CardContent>

          <CardActions>
            <Button sx={{ background: "white" }}>madhav</Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};
