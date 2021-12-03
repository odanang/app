import React, { useContext } from "react";
import { Container } from "native-base";
import { UserListRequest } from "../ui/User";

import { AuthContext } from "../ui/Provider/Native";
export default function NewPost({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <Container w="container.lg" margin="auto" mt="64px" maxW="full" px="8px">
      <UserListRequest id={user?.id} />
    </Container>
  );
}
