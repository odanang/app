import React from "react";
import { Button, Box, Image } from "native-base";
import { useLinkTo } from "@react-navigation/native";

function UI({ item }) {
  const linkTo = useLinkTo();

  return (
    <Box w="full" position="relative">
      <Image
        source={{
          uri:
            "https://odanang.net" +
            (item?.images[0]?.file?.publicUrl || "/upload/img/no-image.png"),
        }}
        alt="Profile Image"
        flex="1"
        p="50%"
      />
      <Button
        onPress={() => linkTo(`/posts/${item?.id}`)}
        position="absolute"
        w="full"
        h="100%"
        bgColor="transparent"
      ></Button>
    </Box>
  );
}
export default UI;
