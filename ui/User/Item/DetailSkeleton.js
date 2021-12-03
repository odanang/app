import React from "react";
import ContentLoader from "react-content-loader";
import { Rect, Circle } from "react-content-loader/native";
import { Box } from "native-base";

function UI(props) {
  return (
    <Box maxW="1005" w="full" mx="auto" p="1%">
      <ContentLoader
        speed="1"
        w="full"
        mx="auto"
        viewBox="0 0 1005 320"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        animate="true"
      >
        <Circle cx="60" cy="60" r="60" />
        <Rect x="150" y="10" rx="15" ry="15" width="220" height="30" />
        <Rect x="150" y="55" rx="10" ry="10" width="150" height="20" />
        <Rect x="150" y="90" rx="10" ry="10" width="280" height="20" />
        <Rect x="0" y="160" rx="10" ry="10" width="1005" height="150" />
      </ContentLoader>
    </Box>
  );
}
export default UI;
