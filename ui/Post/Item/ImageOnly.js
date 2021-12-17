import React from "react";
import { Button, Box, Image, Text } from "native-base";
import { useLinkTo } from "@react-navigation/native";

function UI({ item }) {
  const linkTo = useLinkTo();
  const imageSource = item.images.length
    ? {
        uri:
          "https://odanang.net" +
          (item?.images[0]?.file?.publicUrl || "/upload/img/no-image.png"),
      }
    : {
        uri:
          "https://odanang.net/upload/img/61bc6425f42406f37a121577-Screen%20Shot%202021-12-17%20at%2017.19.10.png",
      };

  const sliceContent = (content) => {
    return `${content.slice(0, 80)}${content.length > 80 ? "..." : ""}`;
  };

  return (
    <>
      <Box w="full" position="relative">
        <Image source={imageSource} alt="Profile Image" flex="1" p="50%" />
        <Button
          onPress={() => linkTo(`/posts/${item?.id}`)}
          position="absolute"
          w="full"
          h="100%"
          bgColor="transparent"
        >
          {!item.images.length ? (
            <Box w="100%" maxW="140px">
              <Text textAlign="center">{sliceContent(item.content)}</Text>
            </Box>
          ) : (
            ""
          )}
        </Button>
      </Box>
    </>
  );
}
export default UI;
