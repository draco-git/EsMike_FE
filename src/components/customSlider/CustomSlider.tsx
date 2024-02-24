import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button } from "@mui/material";
import { useRef } from "react";
import { MovieCard } from "../movieCards/MovieCard.tsx";
import "./customSlider.css";

export const CustomSlider = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const onPrevClick = () => {
    if (gridRef.current) {
      const currentElement = gridRef.current;
      const firstChildElement = currentElement?.firstElementChild;
      if (firstChildElement) {
        const { width } = firstChildElement.getBoundingClientRect();
        currentElement.scrollBy(-width * 7, 0);
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
        currentElement.scrollBy(width * 7, 0);
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
      <Box sx={{ display: "flex", alignItems: "center", mx: 0.5 }}>
        <Box
          onClick={onPrevClick}
          sx={{
            zIndex: 10,
            px: 0,
            height: "80px",
            ":hover": {
              background: "rgba(0,0,0,0.6)",
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="xl" width={40} />
        </Box>
        <Box
          ref={gridRef}
          sx={{
            display: "grid",
            overflow: "hidden",
            gridAutoFlow: "columns",
            gap: "5px",
            mx: 1,
            scrollBehavior: "smooth",
          }}
        >
          {[...Array(20)].map((_item, index) => (
            <Box
              key={index}
              sx={{
                gridRow: 1,
                position: "relative",
              }}
            >
              <MovieCard />
            </Box>
          ))}
        </Box>
        <Box
          onClick={onNextClick}
          sx={{
            zIndex: 10,
            px: 0,
            height: "80px",
            ":hover": {
              background: "rgba(0,0,0,0.6)",
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} size="xl" width={40} />
        </Box>
      </Box>
    </>
  );
};

// totalwidth = x,    items = y    itemsWidth = x - y() / y

export const SliderV2 = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const onPrevClick = () => {
    if (gridRef.current) {
      const currentElement = gridRef.current;
      const firstChildElement = currentElement?.firstElementChild;
      if (firstChildElement) {
        const { width } = firstChildElement.getBoundingClientRect();
        currentElement.scrollBy(-width * 6, 0);
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
        currentElement.scrollBy(width * 6, 0);
        console.log(width);
      }
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Button onClick={onPrevClick}>Prev</Button>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            overflow: "hidden",
            gap: 2,
            position: "relative",
          }}
        >
          {[...Array(20)].map((index) => (
            <li
              key={index}
              style={{
                // position: "absolute",
                flex: "1 1 auto",
              }}
            >
              {index === 7 ? <>madvhv</> : <MovieCard />}
              {/*<MovieCard />*/}
            </li>
          ))}
        </ul>
        <Button onClick={onNextClick}>Next</Button>
      </Box>
    </>
  );
};
