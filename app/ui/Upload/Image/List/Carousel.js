import React, { useState } from "react";
import { HStack, Box, Flex, Image, Button } from "native-base";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function UI() {
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

  const slides = [
    {
      img:
        "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632806027/241112067_307788851102765_1403995891199547762_n_qzsigo.jpg",
    },
    {
      img:
        "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632806027/241234883_755141348519810_2296093530347369693_n_ulyxyc.jpg",
    },
    {
      img:
        "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632806027/241259419_246687107340299_4139464774758156957_n_s1zuao.jpg",
    },
    {
      img:
        "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632806027/241330623_865083824135413_1398190938801270614_n_rikcpi.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex w="100%" alignItems="center" justifyContent="center">
      <Flex w="100%" direction="row" overflow="hidden" position="relative">
        <Flex h="600" direction="row" w="100%" {...carouselStyle}>
          {slides.map((slide, index) => (
            <Box key={`slide-${index}`} boxSize="100%" flex="none">
              <Image
                src={slide.img}
                alt="Slide Image"
                boxSize="100%"
                backgroundSize="cover"
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
          {Array.from({ length: slidesCount }).map((_, slide) => (
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