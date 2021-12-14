import React, { useContext } from "react";
import { Platform } from "react-native";
import { Container } from "native-base";
import { UserListSuggest } from "../ui/User";
import { AuthContext } from "../ui/Provider/Native";
export default function NewPost({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt={Platform.OS === "web" ? "64px" : "0"}
      maxW="full"
      px="8px"
    >
      <UserListSuggest id={user?.id} navigation={navigation} />
    </Container>
  );
}
