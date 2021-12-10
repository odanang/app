import React from "react";
import { Button } from "native-base";
import PostDelete from "./Controller";

function UI({ loading, error, clickDetete, post }) {
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
      // leftIcon={
      //   <FontAwesome
      //     name="trash-o"
      //     color="#22c55e"
      //     size={18}
      //     style={{ marginTop: "-2px" }}
      //   />
      // }
    >
      Xoá bài viết
    </Button>
  );
}
export default function PostDeleteText(props) {
  return <PostDelete {...props} UI={UI} />;
}
