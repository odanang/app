import React, { useContext } from "react";
import { Platform } from "react-native";
import { Container } from "native-base";
import { UserItemDetail } from "../ui/User";
import { useRoute } from "@react-navigation/core";
import { AuthContext } from "../ui/Provider/Native";

export default function User({ navigation }) {
  const { user } = useContext(AuthContext);
  const { params = {} } = useRoute();
  const { id } = params;
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt={Platform.OS === "web" ? "64px" : "0"}
      maxW="full"
      px="8px"
    >
      <UserItemDetail id={id} my_id={user?.id} navigation={navigation} />
    </Container>
  );
}
