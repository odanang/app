import React from "react";
import { Button, Box, Image } from "native-base";

function UI({ item }) {
  const singlePostHandler = () => {
    //console.log(item.id, item.link, item.thumbnailUrl);
    console.log(item.id, JSON.stringify(item.images));
  };

  return (
    <Box w="full" position="relative">
      {/* <Image
        source={{
          uri: item.thumbnailUrl,
        }}
        alt="Profile Image"
        backgroundSize="cover"
        flex="1"
        p="50%"
      /> */}
      <Image
        source={{
          uri:
            "https://odanang.net" +
            (item?.images[0]?.file?.publicUrl || "/upload/img/no-image.png"),
        }}
        alt="Profile Image"
        backgroundSize="cover"
        flex="1"
        p="50%"
      />
      <Button
        onPress={singlePostHandler}
        position="absolute"
        w="full"
        h="100%"
        bgColor="transparent"
      ></Button>
    </Box>
  );
}
export default UI;
