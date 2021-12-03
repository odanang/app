import React from "react";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import { Box } from "native-base";

function UI(props) {
  return (
    <Box maxW="600" w="full" mx="auto" p="2">
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
  );
}
export default UI;
