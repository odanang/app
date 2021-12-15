import React from "react";
import { HStack, Box, Input, Text } from "native-base";
import Controller from "./Controller";
import AuthAvatar from "../../../User/Auth/Avatar";

export function UI({
  loading,
  content,
  contentChangeHandle,
  userCommentHandle,
}) {
  return (
    <Box mx="auto" w="full">
      <HStack space="2" display="flex" flexDirection="row" w="full">
        <AuthAvatar />
        <Box flex="1">
          <Input
            name="comment"
            type="text"
            bgColor="white"
            p={2}
            fontSize={14}
            borderWidth={1}
            borderColor="gray.100"
            rounded="8"
            _focus={{
              borderColor: "gray.100",
            }}
            placeholder="Viết bình luận ..."
            value={content}
            onChange={contentChangeHandle}
            onSubmitEditing={userCommentHandle}
          />
        </Box>
      </HStack>
    </Box>
  );
}
export default function InteractionCommentCreateSimple(props) {
  return <Controller {...props} UI={UI} />;
}
