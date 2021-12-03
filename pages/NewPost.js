import React from "react";
import { Container } from "native-base";
import { PostCreateSimple } from "../ui/Post";

export default function NewPost({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="64px" maxW="full" px="8px">
      <PostCreateSimple />
    </Container>
  );
}
