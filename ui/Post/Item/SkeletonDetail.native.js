import React from "react";
import { Rect, ContentLoader } from "react-content-loader/native";
import { Box } from "native-base";

function UI() {
  return (
    <Box maxW="900" w="full" mx="auto">
      <ContentLoader
        speed="1"
        w="full"
        mx="auto"
        viewBox="0 0 900 720"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        animate="true"
      >
        <Rect x="560" y="15" rx="40" ry="40" width="40" height="40" />
        <Rect x="620" y="25" rx="10" ry="10" width="150" height="20" />
        <Rect x="560" y="70" rx="10" ry="10" width="320" height="25" />
        <Rect x="560" y="120" rx="10" ry="10" width="320" height="100" />
        <Rect x="560" y="235" rx="10" ry="10" width="320" height="100" />
        <Rect x="560" y="350" rx="10" ry="10" width="320" height="100" />
        <Rect x="560" y="465" rx="10" ry="10" width="320" height="100" />
        <Rect x="0" y="15" rx="10" ry="10" width="540" height="550" />
      </ContentLoader>
    </Box>
  );
}
export default UI;
