import React from "react";
import { HStack, Box, Text, Button } from "native-base";
import { Link } from "@react-navigation/native";
import { Text as RNText, Platform } from "react-native";
import UserAuthAvatar from '../../User/Auth/Avatar'
function UI() {
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
        <UserAuthAvatar />
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
