import React, { useContext } from "react";
import { Platform } from "react-native";
import { Container } from "native-base";
import { UserUpdateSimple } from "../ui/User";
import { AuthContext } from "../ui/Provider/Native";
export default function UserUpdate({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt={Platform.OS === "web" ? "64px" : "0"}
      maxW="full"
      px="8px"
    >
      <UserUpdateSimple user={user} />
    </Container>
  );
}
