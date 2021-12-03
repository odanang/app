import React, { useState } from "react";
import { HStack, Box, Flex, Image, Button } from "native-base";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function UI({ urls = [] }) {
  const arrowStyles = {
    position: "absolute",
    top: "50%",
    color: "gray.700",
    p: "1",
    fontSize: "20",
    bgColor: "white",
    opacity: "0.6",
    rounded: "50%",
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const urlsCount = urls.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? urlsCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === urlsCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Flex w="full" direction="row" overflow="hidden" position="relative">
        <Flex direction="row" w="full" {...carouselStyle}>
          {urls.map((slide, index) => (
            <Box key={`slide-${index}`} boxSize="100%" flex="none">
              <Image
                src={slide}
                alt="Slide Image"
                backgroundSize="cover"
                flex="1"
                p="50%"
              />
            </Box>
          ))}
        </Flex>
        <Button {...arrowStyles} left="3" onPress={prevSlide}>
          <BsChevronLeft size="16" />
        </Button>
        <Button {...arrowStyles} right="3" onPress={nextSlide}>
          <BsChevronRight size="16" />
        </Button>
        <HStack direction="row" position="absolute" bottom="2" right="2">
          {Array.from({ length: urlsCount }).map((_, slide) => (
            <Button
              key={`dots-${slide}`}
              w="1"
              m="0.5"
              p="1"
              rounded="50%"
              opacity="0.8"
              bgColor={currentSlide === slide ? "green.500" : "white"}
              onPress={() => setSlide(slide)}
            ></Button>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}
export default UI;
