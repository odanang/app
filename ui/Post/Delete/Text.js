import React from "react";
import { Button } from "native-base";
import { FaRegTrashAlt } from "react-icons/fa";
import PostDelete from "./Controller";

function UI({loading, error, clickDetete, post}) {
  const toggleText = (e) => {
    console.log("Post Delete Text");
  };
  const hadleSubmit = (e) => {
    clickDetete();
  };

  return loading ? (
    "..."
  ) : (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="3"
      py="1.5"
      bgColor="transparrent"
      onPress={hadleSubmit}
      leftIcon={<FaRegTrashAlt color="#22c55e" fontSize="15" />}
    >
      Xoá bài viết
    </Button>
  );
}
export default function PostDeleteText(props) {
  return <PostDelete {...props} UI={UI} />;
}