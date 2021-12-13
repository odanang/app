import React from "react";
import UserSignOut from "./Controller";
import { Button, Text } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont();
function UI({ loading, error, signOut, navigation, auth }) {
  const clickSignOut = (e) => {
    signOut();
  };

  if (loading)
    return (
      <Button
        justifyContent="flex-start"
        bgColor="white"
        _text={{ color: "gray.900" }}
        disabled
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

  return (
    <Button
      onPress={clickSignOut}
      justifyContent="flex-start"
      bgColor="white"
      _text={{ color: "gray.900" }}
      disabled={loading}
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
