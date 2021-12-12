import React, { useContext } from "react";
import { Container } from "native-base";
import { NotificationListSimple } from "../ui/Notification";
import { AuthContext } from "../ui/Provider/Native";
export default function Notifications({ navigation }) {
  const user = useContext(AuthContext).user;
  return (
    <Container w="container.lg" maxW="full" px="2">
      <NotificationListSimple id={user?.id} />
    </Container>
  );
}
