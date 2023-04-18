import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const arrowStyles = {
  position: "absolute",
  zIndex: 10,
  top: "50%",
  transform: "translateY(-50%)",
  width: "48px",
  height: "48px",
  borderRadius: "24px",
  backgroundColor: "whiteAlpha",
  border: "1px solid #ddd",
};

const Carousel = (props) => {
  const { children, show, gap } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <Box className="carousel-container">
      <Box className="carousel-wrapper">
        {/* You can alwas change the content of the button to other things */}
        {currentIndex > 0 && (
          <Button
            onClick={prev}
            className="left-arrow"
            left={0}
            {...arrowStyles}
            // colorScheme={useColorModeValue("primary")}
          >
            <HiOutlineArrowNarrowLeft />
          </Button>
        )}
        <Box
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Box
            className={`carousel-content show-${show}`}
            //  w={`calc(100% / ${show} - 5% )`}
            transform={`translateX(-${currentIndex * (100 / show)}%)`}
            gap={gap}
          >
            {children}
          </Box>
        </Box>
        {/* You can alwas change the content of the button to other things */}
        {currentIndex < length - show && (
          <Button
            onClick={next}
            className="right-arrow"
            {...arrowStyles}
            right={0}
            // colorScheme={useColorModeValue("primary")}
          >
            <HiOutlineArrowNarrowRight />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Carousel;