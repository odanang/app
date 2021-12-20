import React from "react";
import { Button } from "native-base";
import Feather from "react-native-vector-icons/Feather";
import { useLinkTo } from "@react-navigation/native";

Feather.loadFont();

function UI({ id }) {
  const linkTo = useLinkTo();
  const navigateHanle = (e) => {
    linkTo(`/updatepost/${id}`);
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="3"
      py="1.5"
      bgColor="white"
      onPress={navigateHanle}
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
