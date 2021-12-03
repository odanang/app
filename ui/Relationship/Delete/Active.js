import React from "react";
import { Button } from "native-base";
import Controller from "./Controller";

function UI({ error, loading, clickDetete }) {
  const clickHandler = (e) => {
    if (confirm("Bạn có chắc chắn muốn xoá hem?") && !loading) clickDetete();

    //if (!loading) clickDetete();
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
      Xoá bạn bè
    </Button>
  );
}
export default function RelationshipDeleteActive(props) {
  return <Controller {...props} UI={UI} />;
}

// A đã tạo Relationship tới B, B đã đồng ý (cập nhật trạng thái Relationship là active)
// A vào tường của B sẽ thấy nút "xóa bạn"
