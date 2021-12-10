import React from "react";
import { Button } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont();

function UI({ onPress }) {
  return (
    <Button
      _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
      p="2"
      bgColor="transparent"
      leftIcon={
        <FontAwesome
          name="comment-o"
          color="#a1a1aa"
          size={18}
          style={{ marginTop: "-4px" }}
        />
      }
      _hover={{ bgColor: "gray.100" }}
      onPress={onPress}
    >
      Bình luận
    </Button>
  );
}
export default UI;
