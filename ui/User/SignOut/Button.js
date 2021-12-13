import React from "react";
import UserSignOut from "./Controller";
import { Button, Text } from "native-base";
import { IoLogOut } from "react-icons/io5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont();
function UI({ loading, error, signOut, navigation, auth }) {
  const clickSignOut = (e) => {
    signOut();
  };
  return loading ? (
    <Text></Text>
  ) : (
    <Button
      onPress={clickSignOut}
      justifyContent="flex-start"
      bgColor="white"
      _text={{ color: "gray.900" }}
      leftIcon={
        <FontAwesome
          name="sign-out"
          color="#22c55e"
          size={18}
          style={{ marginRight: 10 }}
        />
      }
    >
      <Text>Đăng xuất</Text>
    </Button>
  );
}
export default function UserSignOutButton(props) {
  return <UserSignOut {...props} UI={UI} />;
}
