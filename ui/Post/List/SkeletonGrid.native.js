import React from "react";
import { ContentLoader, Rect } from "react-content-loader/native";
import { Box } from "native-base";

function UI(props) {
  return (
    <Box maxW="900" w="full" mx="auto" p="1%">
      <ContentLoader
        speed="1"
        w="full"
        mx="auto"
        viewBox="0 0 900 280"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        animate="true"
      >
        <Rect x="0" y="0" rx="10" ry="10" width="290" height="270" />
        <Rect x="305" y="0" rx="10" ry="10" width="290" height="270" />
        <Rect x="610" y="0" rx="10" ry="10" width="290" height="270" />
      </ContentLoader>
    </Box>
  );
}
export default UI;
