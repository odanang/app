import React, { useContext } from "react";
import { HStack, Box, Image, Text, Button } from "native-base";
import { Link } from "@react-navigation/native";
import { AuthContext } from "../../Provider/Native";
import { Text as RNText, Platform } from "react-native";
import { borderRadius } from "styled-system";
function UI() {
  const createHandler = () => {
    console.log("click");
  };
  const user = useContext(AuthContext).user;
  return (
    <Box mx="0" w="full" px="0" mt="2">
      <HStack
        space="4"
        alignItems="center"
        w="full"
        p="3"
        my="2"
        rounded={["0", "12"]}
        borderWidth="1"
        borderColor="gray.100"
      >
        <Image
          source={{
            // uri:
            //   "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719777/200960556_1184264562021915_3530694902678239694_n_u7mk8s.jpg",
            uri:
              "https://odanang.net" +
              (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
          }}
          alt="Profile image"
          size="8"
          mx="auto"
          rounded="100"
        />
        <Box flex="1">
          <Text color="gray.500" fontSize="15">
            Bạn đang nghĩ gì?
          </Text>
        </Box>
        <Link to={{ screen: "newpost" }}>
          {Platform.OS !== "web" ? (
            <Box bgColor="green.500" rounded="8" py="2" px="4" h="36px">
              <RNText
                style={{
                  fontWeight: "500",
                  color: "white",
                  fontFamily: "Lexend_500Medium",
                }}
              >
                THÊM BÀI VIẾT
              </RNText>
            </Box>
          ) : (
            <Button
              _text={{
                color: "white",
                fontSize: ["13", "14"],
                fontWeight: "600",
              }}
              bgColor="green.500"
              rounded="8"
              py="2"
              px="4"
              onPress={createHandler}
            >
              THÊM BÀI VIẾT
            </Button>
          )}
        </Link>
      </HStack>
    </Box>
  );
}
export default UI;
