import React from "react";
import { HStack, Box, Button, Input } from "native-base";
import { Text } from "react-native";
import Controller from "./Controller";
import AuthAvatar from "../../../User/Auth/Avatar";
import { useLinkTo } from "@react-navigation/native";

export function UI({ id }) {
  const linkTo = useLinkTo();
  return (
    <Box mx="auto" w="full">
      <HStack space="2" display="flex" flexDirection="row" w="full">
        <AuthAvatar />
        <Box flex="1">
          <Button
            d="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            onPress={() => linkTo(`/posts/${id}`)}
            bgColor="white"
            p={2}
            borderWidth={1}
            borderColor="gray.100"
            rounded="8"
          >
            <Text
              style={{
                color: "#a1a1aa",
                padding: 2,
                fontFamily: "Lexend_400Regular",
              }}
            >
              Viết bình luận ...
            </Text>
          </Button>
        </Box>
      </HStack>
    </Box>
  );
}
export default function InteractionCommentCreateSimple(props) {
  return <Controller {...props} UI={UI} />;
}
