import React, { useContext } from "react";
import { Platform } from "react-native";
import { Container } from "native-base";
import { UserListSimple } from "../ui/User";
import { AuthContext } from "../ui/Provider/Native";
export default function Friends({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt={Platform.OS === "web" ? "64px" : "0"}
      maxW="full"
      px="8px"
    >
      <UserListSimple id={user?.id} navigation={navigation} />
    </Container>
  );
}
