import React from "react";
import { Button } from "native-base";
import { Text as RNText, Platform } from "react-native";
import Controller from "./Controller";

function UI({ error, loading, clickDetete }) {
  const clickHandler = (e) => {
    if (!loading) clickDetete();
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: ["13", "14"], fontWeight: "600" }}
      p="8px"
      rounded="8px"
      w="full"
      bgColor="gray.100"
      onPress={clickHandler}
      disabled={loading}
    >
      {Platform.OS !== "web" ? (
        <RNText
          style={{
            fontWeight: "500",
            color: "#a1a1aa",
            padding: 2,
            fontFamily: "Lexend_500Medium",
          }}
        >
          Xoá bạn bè
        </RNText>
      ) : (
        "Xoá bạn bè"
      )}
    </Button>
  );
}
export default function RelationshipDeleteActive(props) {
  return <Controller {...props} UI={UI} />;
}

// A đã tạo Relationship tới B, B đã đồng ý (cập nhật trạng thái Relationship là active)
// A vào tường của B sẽ thấy nút "xóa bạn"
