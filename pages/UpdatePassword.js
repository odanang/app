import React from "react";
import { Platform } from "react-native";
import { Container } from "native-base";
import { UserUpdatePassword } from "../ui/User";

export default function UserUpdate({ navigation }) {
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt={Platform.OS === "web" ? "64px" : "0"}
      maxW="full"
      px="8px"
    >
      <UserUpdatePassword />
    </Container>
  );
}
