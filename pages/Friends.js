import React, { useContext } from "react";
import { Container } from "native-base";
import { UserListSimple } from "../ui/User";
import { AuthContext } from "../ui/Provider/Native";
export default function Friends({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <Container w="container.lg" margin="auto" mt="64px" maxW="full" px="8px">
      <UserListSimple id={user?.id} />
    </Container>
  );
}
