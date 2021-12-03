import React, { useState, Fragment } from "react";
import { Button } from "native-base";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

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
          leftIcon={<FaBookmark color="#22c55e" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={saveHandle}
        >
          Lưu
        </Button>
      )}
      {!isSaved && (
        <Button
          _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FaRegBookmark color="#a1a1aa" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={saveHandle}
        >
          Lưu
        </Button>
      )}
    </Fragment>
  );
}
export default UI;
