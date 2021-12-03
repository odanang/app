import React from "react";
import { Button } from "native-base";
import { IoIosSettings } from "react-icons/io";

function UI() {
  const clickHandler = (e) => {
    console.log("User Update Button");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: ["13", "14"], fontWeight: "600" }}
      p="2"
      rounded="8"
      w="full"
      bgColor="gray.100"
      leftIcon={<IoIosSettings color="#a1a1aa" />}
      onPress={clickHandler}
    >
      Chỉnh sửa trang cá nhân
    </Button>
  );
}
export default UI;
