import React from "react";
import { Button } from "native-base";
import { FaRegEdit } from "react-icons/fa";
import Feather from "react-native-vector-icons/Feather";

Feather.loadFont();

function UI() {
  const toggleText = (e) => {
    console.log("Post Update Text");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="3"
      py="1.5"
      bgColor="transparent"
      onPress={toggleText}
      leftIcon={
        <Feather
          name="edit"
          color="#22c55e"
          size={18}
          style={{ marginTop: -2 }}
        />
      }
    >
      Sửa bài viết
    </Button>
  );
}
export default UI;
