import React from "react";
import { Button } from "native-base";
import Controller from "./Controller";

function UI({ error, loading, clickAgree }) {
  const clickHandler = (e) => {
    if (!loading) clickAgree();
  };

  return (
    <Button
      _text={{ color: "white", fontSize: ["13", "14"], fontWeight: "600" }}
      p="8px"
      rounded="8px"
      w="full"
      bgColor="green.500"
      onPress={clickHandler}
    >
      Đồng ý kết bạn
    </Button>
  );
}
export default function RelationshipUpdateButton(props) {
  return <Controller {...props} UI={UI} />;
}

// A đã tạo Relationship tới B, B chưa đồng ý (Relationship đang inActive)
// B vào tường của A sẽ thấy nút này (đồng ý kết bạn)
