import React from "react";
import { Button, Text } from "native-base";
import Controller from "./Controller";
function UI({ loading, error, comment, clickDetete }) {
  const toggleText = (e) => {
    console.log("Comment Delete Text");
  };
  const handleSubmit = (e) => {
    clickDetete();
  };
  if (loading) return <Text>Đang tải</Text>
  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="0"
      bgColor="transparent"
      onPress={handleSubmit}
    >
      Xoá
    </Button>
  );
}
export default function InteractionCommentCreateDelete(props) {
  return <Controller {...props} UI={UI} />;
}
