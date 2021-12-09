import React, { useContext, useMemo } from "react";
import { Platform } from "react-native";
import { Container } from "native-base";
import { UserUpdateSimple } from "../ui/User";
import { AuthContext } from "../ui/Provider/Native";
export default function UserUpdate({ navigation }) {
  const { user, refetch } = useContext(AuthContext);
  const userUpdateSimple = useMemo(() => <UserUpdateSimple user={user} onCompleted={data => {
    refetch()
  }} />, [user])
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt={Platform.OS === "web" ? "64px" : "0"}
      maxW="full"
      px="8px"
    >
      {userUpdateSimple}
    </Container>
  );
}
