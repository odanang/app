import React from "react";
import { Button } from "native-base";
import { FaRegComment } from "react-icons/fa";

function UI() {
  const toggleButton = (e) => {
    console.log("Comment List ToggleButton");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
      p="2"
      bgColor="transparent"
      leftIcon={<FaRegComment color="#a1a1aa" size="17" />}
      _hover={{ bgColor: "gray.100" }}
      onPress={toggleButton}
    >
      Bình luận
    </Button>
  );
}
export default UI;
