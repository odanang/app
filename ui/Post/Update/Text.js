import React from "react";
import { Button } from "native-base";
import { FaRegEdit } from "react-icons/fa";

function UI() {
  const toggleText = (e) => {
    console.log("Post Update Text");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="3"
      py="1.5"
      bgColor="transparrent"
      onPress={toggleText}
      leftIcon={<FaRegEdit color="#22c55e" fontSize="16" />}
    >
      Sửa bài viết
    </Button>
  );
}
export default UI;
