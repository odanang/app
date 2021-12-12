import React from "react";
import { Platform } from "react-native";
import { Container } from "native-base";
import { PostCreateSimple } from "../ui/Post";

export default function NewPost({ navigation }) {
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt={Platform.OS === "web" ? "64px" : "0"}
      maxW="full"
      px="8px"
    >
      <PostCreateSimple />
    </Container>
  );
}
