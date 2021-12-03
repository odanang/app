import React from "react";
import { Container } from "native-base";
import { PostItemDetail } from "../ui/Post";
import { useRoute } from "@react-navigation/core";

export default function Post({ navigation }) {
  const { params = {} } = useRoute();
  const { id } = params;
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt="64px"
      maxW="full"
      px={["0", "8px"]}
    >
      <PostItemDetail id={id}/>
    </Container>
  );
}
