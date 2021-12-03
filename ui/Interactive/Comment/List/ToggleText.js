import React from "react";
import { Button, Box } from "native-base";
import { IoIosReturnRight } from "react-icons/io";

export function UI({ onPress, count }) {
  if (!count) return <Box />;
  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="0"
      bgColor="transparent"
      leftIcon={<IoIosReturnRight size="16" />}
      onPress={onPress}
      fontFamily="body"
    >
      {`Xem câu trả lời (${count})`}
    </Button>
  );
}
export default UI;
