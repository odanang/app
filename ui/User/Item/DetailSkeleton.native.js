import React from "react";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import { Box, VStack } from "native-base";
import { Dimensions } from "react-native";

function UI(props) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <VStack w="full" position="relative">
      <Box position="absolute" top="5" left="0" w="full" h={windowWidth}>
        <ContentLoader
          speed="1"
          w="full"
          mx="auto"
          viewBox="0 0 900 900"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          animate="true"
        >
          <Circle cx="120" cy="120" r="120" />
          <Rect x="300" y="40" rx="15" ry="15" width="220" height="50" />
          <Rect x="300" y="100" rx="10" ry="10" width="150" height="50" />
          <Rect x="300" y="160" rx="10" ry="10" width="280" height="50" />
          <Rect x="0" y="300" rx="10" ry="10" width="900" height="150" />
          <Rect x="0" y="470" rx="10" ry="10" width="900" height="150" />
          <Rect x="0" y="640" rx="10" ry="10" width="900" height="150" />
        </ContentLoader>
      </Box>
    </VStack>
  );
}
export default UI;
