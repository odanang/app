import React from "react";
import ContentLoader from "react-content-loader";
import { Rect } from "react-content-loader/native";
import { Box } from "native-base";

function UI() {
  return (
    <Box maxW="1000" w="full" mx="auto">
      <ContentLoader
        speed="1"
        w="full"
        mx="auto"
        viewBox="0 0 1000 700"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        animate="true"
      >
        <Rect x="620" y="15" rx="40" ry="40" width="40" height="40" />
        <Rect x="680" y="25" rx="10" ry="10" width="150" height="20" />
        <Rect x="620" y="70" rx="10" ry="10" width="380" height="25" />
        <Rect x="620" y="120" rx="10" ry="10" width="380" height="100" />
        <Rect x="620" y="235" rx="10" ry="10" width="380" height="100" />
        <Rect x="620" y="350" rx="10" ry="10" width="380" height="100" />
        <Rect x="620" y="465" rx="10" ry="10" width="380" height="100" />
        <Rect x="0" y="15" rx="10" ry="10" width="600" height="550" />
      </ContentLoader>
    </Box>
  );
}
export default UI;
