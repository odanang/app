import React from "react";
import { Button } from "native-base";
import CommentDelete from "./Controller";
function UI({ loading, error, comment, clickDetete }) {
  const toggleText = (e) => {
    console.log("Comment Delete Text");
  };
  const handleSubmit = (e) => {
    clickDetete();
  };
  return loading ? (
    "..."
  ) : (
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
  return <CommentDelete {...props} UI={UI} />;
}
