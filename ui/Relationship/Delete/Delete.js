import React from "react";
import { Button } from "native-base";
import Controller from "./Controller";

function UI({ error, loading, clickDetete, id }) {
  const clickHandler = (e) => {
    if (confirm("Bạn có chắc chắn muốn xoá hem?") && !loading) clickDetete();
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: ["13", "14"], fontWeight: "600" }}
      p="8px"
      rounded="8px"
      w="full"
      bgColor="gray.100"
      onPress={clickHandler}
    >
      Xoá lời mời
    </Button>
  );
}
export default function RelationshipDeleteDelete(props) {
  return <Controller {...props} UI={UI} />;
}

// A đã tạo Relationship tới B, B chưa đồng ý (Relationship đang inActive)
// B vào tường A thấy nút "xóa lời mời"
