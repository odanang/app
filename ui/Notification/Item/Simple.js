import React from "react";
import { Box, Button, Text, Image, HStack } from "native-base";
import { Text as RNText, Platform } from "react-native";
import { Link } from "@react-navigation/native";
import { useLinkTo } from "@react-navigation/native";
function UI(props) {
  const linkTo = useLinkTo();
  return (
    <Button bgColor="white" onPress={props.notificationHandler} onPress={() => linkTo(props?.item?.url+``)}>
      <HStack
        space="12px"
        display="flex"
        flexDirection="row"
        w="full"
        px="4px"
        alignItems="flex-start"
        justifyContent="flex-start"
        position="relative"
        zIndex="1"
      >
        <Image
          source={{
            uri: props.item.imgUrl,
          }}
          alt="Profile image"
          size="40px"
          rounded="100"
          mt="4px"
        />
        <Box>
          {Platform.OS === "web" ? (
            <Text color="gray.900" fontWeight="600">
              {props.item.user}
            </Text>
          ) : (
            <RNText
              style={{
                fontWeight: "500",
                fontFamily: "Lexend_500Medium",
              }}
            >
              {props.item.user}
            </RNText>
          )}

          <Text>{props.item.content}</Text>
          <Text color="gray.400" fontSize="12px">
            {props.item.time}
          </Text>
        </Box>
      </HStack>
    </Button>
  );
}
export default UI;
