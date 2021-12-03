import React from "react";
import { Container } from "native-base";
import { UserUpdateSimple } from "../ui/User";

export default function UserUpdate({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="64px" maxW="full" px="8px">
      <UserUpdateSimple />
    </Container>
  );
}
