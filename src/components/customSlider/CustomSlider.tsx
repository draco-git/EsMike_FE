import { Box, Button, Card, CardActions, CardMedia } from "@mui/material";
import { useRef } from "react";
import sampleImage from "../../assests/sampleImage2.webp";

export const CustomSlider = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const onPrevClick = () => {
    if (gridRef.current) {
      const currentElement = gridRef.current;
      const firstChildElement = currentElement?.firstElementChild;
      if (firstChildElement) {
        const { width } = firstChildElement.getBoundingClientRect();
        currentElement.scrollBy(-width * 4, 0);
        console.log(width);
      }
      // currentElement.scrollLeft = currentElement.clientWidth / 0.2;
    }
  };

  const onNextClick = () => {
    if (gridRef.current) {
      const currentElement = gridRef.current;
      const firstChildElement = currentElement?.firstElementChild;

      // currentElement.scrollLeft = currentElement.offsetWidth / 0.2;
      // currentElement?.scrollBy(
      //   firstChildElement?.offsetWidth / scrollableWidth,
      //   firstChildElement?.offsetWidth / scrollableWidth,
      // );
      if (firstChildElement) {
        const { width } = firstChildElement.getBoundingClientRect();
        currentElement.scrollBy(width * 4, 0);
        console.log(width);
      }
    }
  };

  // const onNextClick = () => {
  //     if (gridRef) {
  //         const currentElement = gridRef.current;
  //         currentElement.scr = currentElement.clientWidth / 2;
  //     }
  // };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button onClick={onPrevClick}>Prev</Button>
        <Box
          ref={gridRef}
          sx={{
            display: "grid",
            // gridTemplateColumns: "repeat(6, 300px)",
            // gridTemplateRows: "minmax(150px, 1fr)",
            overflow: "hidden",
            gridAutoFlow: "columns",
            gap: 2,
            mx: 2,
            scrollBehavior: "smooth",
          }}
        >
          {[...Array(20)].map((index) => (
            <Box
              key={index}
              sx={{
                gridRow: 1,
              }}
            >
              <Card
                sx={{
                  width: 200,
                }}
              >
                <CardMedia component="img" src={sampleImage} />
                <CardActions>
                  <Button>Madhav</Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
        <Button onClick={onNextClick}>Next</Button>
      </Box>
    </>
  );
};

// totalwidth = x,    items = y    itemsWidth = x - y() / y
