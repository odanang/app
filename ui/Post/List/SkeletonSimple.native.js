import React from "react";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import { Box, VStack } from "native-base";
import { Dimensions } from "react-native";

function UI(props) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <VStack w="full" position="relative">
      <Box position="absolute" top="5" left="0" w="full" h={windowWidth + 50}>
        <ContentLoader
          speed="1"
          w="full"
          mx="auto"
          viewBox="0 0 600 720"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          animate="true"
        >
          <Rect x="70" y="15" rx="10" ry="10" width="180" height="20" />
          <Rect x="270" y="15" rx="10" ry="10" width="80" height="20" />
          <Rect x="0" y="70" rx="10" ry="10" width="500" height="20" />
          <Rect x="0" y="110" rx="10" ry="10" width="600" height="550" />
          <Circle cx="25" cy="25" r="25" />
        </ContentLoader>
      </Box>
    </VStack>
  );
}
export default UI;
