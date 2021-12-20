import React from "react";
import { Button, Spinner } from "native-base";
import PostDelete from "./Controller";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont();
function UI({ loading, error, clickDetete, post }) {
  if (loading) {
    return <Spinner color="green.500" size="sm" />;
  }

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="3"
      py="1.5"
      bgColor="white"
      onPress={clickDetete}
      disabled={loading}
      leftIcon={
        <FontAwesome
          name="trash-o"
          color="#22c55e"
          size={18}
          style={{ marginTop: -2, marginRight: 2 }}
        />
      }
    >
      Xoá bài viết
    </Button>
  );
}
export default function PostDeleteText(props) {
  return <PostDelete {...props} UI={UI} />;
}
