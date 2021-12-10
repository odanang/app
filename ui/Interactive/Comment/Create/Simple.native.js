import React, { useContext, useState } from "react";
import { HStack, Box, Image, Input, Text } from "native-base";
import { Keyboard } from "react-native";
import Controller from "./Controller";
import { AuthContext } from "../../../Provider/Native";

export function UI({ loading, error, on, interactive }) {
  const [content, setContent] = useState("");
  const clickCreate = () => {
    Keyboard.dismiss();
    if (!loading)
      on({
        variables: {
          id: interactive?.id,
          data: {
            comments: {
              create: {
                content: content,
              },
            },
          },
        },
      });
  };
  const contentChangeHandle = (value) => {
    setContent(value);
  };
  const userCommentHandle = (value) => {
    if (!content.trim().length) {
      return;
    }
    clickCreate();
    setContent("");
  };
  const user = useContext(AuthContext).user;
  if (loading) return <Text></Text>;
  return (
    <Box mx="auto" w="full">
      <HStack space="2" display="flex" flexDirection="row" w="full">
        <Image
          source={{
            uri:
              "https://odanang.net" +
              (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
          }}
          alt="Alternate Text"
          size="8"
          mx="auto"
          rounded="100"
        />
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
            onChangeText={contentChangeHandle}
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
