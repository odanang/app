import React from "react";
import UserSignOut from "./Controller";
import { Button, Text } from "native-base";
import { IoLogOut } from "react-icons/io5";
function UI({ loading, error, signOut, navigation, auth }) {
  /**
   *
   * @param {Event} e
   */
  const clickSignOut = (e) => {
    signOut();
  };
  return loading ? (
    <Text></Text>
  ) : (
    <Button
      onPress={clickSignOut}
      bgColor="white"
      _text={{ color: "gray.900" }}
      leftIcon={<IoLogOut color="#22c55e" />}
    >
      <Text>Đăng xuất</Text>
    </Button>
  );
}
export default function UserSignOutButton(props) {
  return <UserSignOut {...props} UI={UI} />;
}
