import Carousel, { ArrowProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { MovieCard } from "../movieCards/MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6, // optional, default to 1.
    // partialVisibilityGutter: 20,
    // paritialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const cardDetails = [
  {
    title: "1Abc",
    subTitle: "abc",
  },
  {
    title: "2Xyz",
    subTitle: "xyz",
  },
  {
    title: "3Ayz",
    subTitle: "xyz",
  },
  {
    title: "4XGyz",
    subTitle: "xyz",
  },
  {
    title: "5Abc",
    subTitle: "abc",
  },
  {
    title: "6Xyz",
    subTitle: "xyz",
  },
  {
    title: "7Ayz",
    subTitle: "xyz",
  },
  {
    title: "8XGyz",
    subTitle: "xyz",
  },
];
export const Slider = () => {
  const CustomLeftArrow = ({ onClick }: ArrowProps) => {
    return (
      <span
        style={{ zIndex: "10", position: "absolute" }}
        onClick={() => onClick && onClick()}
      >
        {/* <IconButton sx={{ height: "30px", borderRadius: 0 }}> */}
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="2xl"
          onClick={() => onClick && onClick()}
        />
        {/* </IconButton> */}
      </span>
    );
  };

  const CustomRightArrow = ({ onClick }: ArrowProps) => {
    return (
      <span
        style={{ zIndex: "10", position: "absolute", right: 0 }}
        onClick={() => onClick && onClick()}
      >
        {/* <IconButton> */}
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2xl"
          onClick={() => onClick && onClick()}
        />
        {/* </IconButton> */}
      </span>
    );
  };

  //   const CustomLeftArrow = ({ onClick }: ArrowProps) => {
  //     return (
  //       <span>
  //   <IconButton>
  //     <FontAwesomeIcon
  //       icon={faChevronCircleLeft}
  //       onClick={() => onClick && onClick()}
  //     />
  //   </IconButton>
  //       </span>
  //     );
  //   };

  //   const CustomRightArrow = ({ onClick }: ArrowProps) => {
  //     return (
  //       <span>
  //         <IconButton>
  //           <FontAwesomeIcon
  //             icon={faChevronCircleRight}
  //             onClick={() => onClick && onClick()}
  //           />
  //         </IconButton>
  //       </span>
  //     );
  //   };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={"desktop"}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      // partialVisible
      centerMode
      infinite
    >
      {cardDetails.map(() => {
        return (
          <Box
            sx={{
              padding: 3,
              width: "250px",
            }}
          >
            <MovieCard />
          </Box>
        );
      })}
    </Carousel>
  );
};
