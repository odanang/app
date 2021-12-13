import React from "react";
import { Button } from "native-base";
import { Text as RNText, Platform } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont();

function UI({ onPress }) {
  const style = { marginTop: Platform.OS === "web" ? -4 : -2 };
  return (
    <Button
      _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
      p="2"
      bgColor="transparent"
      leftIcon={
        <FontAwesome name="comment-o" color="#a1a1aa" size={18} style={style} />
      }
      _hover={{ bgColor: "gray.100" }}
      onPress={onPress}
    >
      {Platform.OS !== "web" ? (
        <RNText
          style={{
            color: "#a1a1aa",
            fontWeight: "500",
            fontFamily: "Lexend_500Medium",
          }}
        >
          Bình luận
        </RNText>
      ) : (
        "Bình luận"
      )}
    </Button>
  );
}
export default UI;
