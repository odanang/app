import React from "react";
import ContentLoader from "react-content-loader";
import { Rect } from "react-content-loader/native";
import { Box } from "native-base";

function UI(props) {
  return (
    <Box maxW="1005" w="full" mx="auto" p="1%">
      <ContentLoader
        speed="1"
        w="full"
        mx="auto"
        viewBox="0 0 1005 310"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        animate="true"
      >
        <Rect x="0" y="0" rx="10" ry="10" width="325" height="300" />
        <Rect x="340" y="0" rx="10" ry="10" width="325" height="300" />
        <Rect x="680" y="0" rx="10" ry="10" width="325" height="300" />
      </ContentLoader>
    </Box>
  );
}
export default UI;
