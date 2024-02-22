import { Card, CardContent, Typography } from "@mui/material";

export const MovieCard = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <Card>
      <CardContent sx={{ m: 2 }}>
        <Typography>{title}</Typography>
        <Typography>{subTitle}</Typography>
      </CardContent>
    </Card>
  );
};
