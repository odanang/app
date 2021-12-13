import React from "react";
import { Button } from "native-base";
import { Text as RNText, Platform } from "react-native";
import Controller from "./Controller";

function UI(error, loading, clickDetete, id) {
  const clickHandler = (e) => {
    console.log("User Relationship Delete Button");
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
            fontFamily: "Lexend_500Medium",
            color: "#a1a1aa",
            padding: 2,
          }}
        >
          Huỷ lời mời
        </RNText>
      ) : (
        "Huỷ lời mời"
      )}
    </Button>
  );
}
export default function RelationshipDeleteDelete(props) {
  return <Controller {...props} UI={UI} />;
}

// A đã tạo Relationship tới B, B chưa đồng ý (Relationship đang inActive)
// A vào tường của B sẽ thấy nút "hủy lời mới"
