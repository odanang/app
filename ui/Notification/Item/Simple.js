import React from "react";
import { Box, Button, Text, Image, HStack } from "native-base";
import { Link } from "@react-navigation/native";

function UI(props) {
  return (
    <Button bgColor="white" onPress={props.notificationHandler}>
      <Link to={{ screen: "users" }}>
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
            <Text color="gray.900" fontWeight="600">
              {props.item.user}
            </Text>
            <Text>{props.item.content}</Text>
            <Text color="gray.400" fontSize="12px">
              {props.item.time}
            </Text>
          </Box>
        </HStack>
      </Link>
    </Button>
  );
}
export default UI;
