import React, { useState, Fragment } from "react";
import { Text as RNText, Platform } from "react-native";
import { Button } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont();

function UI() {
  const [isSaved, setIsSaved] = useState(false);

  const saveHandle = (e) => {
    setIsSaved((prev) => !prev);
    console.log("Album Create Button");
  };

  return (
    <Fragment>
      {isSaved && (
        <Button
          _text={{ color: "green.500", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FontAwesome name="bookmark" color="#22c55e" size={18} />}
          _hover={{ bgColor: "gray.100" }}
          onPress={saveHandle}
        >
          {Platform.OS !== "web" ? (
            <RNText
              style={{
                color: "#22c55e",
                fontWeight: "500",
                fontFamily: "Lexend_500Medium",
              }}
            >
              Lưu
            </RNText>
          ) : (
            "Lưu"
          )}
        </Button>
      )}
      {!isSaved && (
        <Button
          _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FontAwesome name="bookmark-o" color="#a1a1aa" size={18} />}
          _hover={{ bgColor: "gray.100" }}
          onPress={saveHandle}
        >
          {Platform.OS !== "web" ? (
            <RNText
              style={{
                color: "#a1a1aa",
                fontWeight: "500",
                fontFamily: "Lexend_500Medium",
              }}
            >
              Lưu
            </RNText>
          ) : (
            "Lưu"
          )}
        </Button>
      )}
    </Fragment>
  );
}
export default UI;
