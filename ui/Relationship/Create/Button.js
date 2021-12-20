import React from "react";
import { Text as RNText, Platform } from "react-native";
import { Button } from "native-base";
import Controller from "./Controller";

function UI({ error, loading, clickAddFriend }) {
  const clickHandler = (e) => {
    if (!loading) clickAddFriend();
    console.log("add friend");
  };

  return (
    <Button
      _text={{ color: "white", fontSize: ["13", "14"], fontWeight: "600" }}
      p="8px"
      rounded="8px"
      w="full"
      bgColor="green.500"
      onPress={clickHandler}
      disabled={loading}
    >
      {Platform.OS !== "web" ? (
        <RNText
          style={{
            fontWeight: "500",
            color: "white",
            padding: 2,
            fontFamily: "Lexend_500Medium",
          }}
        >
          Thêm bạn bè
        </RNText>
      ) : (
        "Thêm bạn bè"
      )}
    </Button>
  );
}
export default function RelationshipCreateButton(props) {
  return <Controller {...props} UI={UI} />;
}

// A và B chưa kết bạn với nhau, A gửi lời mời kết bạn cho B, hoặc ngược lại
