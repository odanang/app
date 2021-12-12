import React from "react";
import { Button, Box } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";

AntDesign.loadFont();

function UI({ navigation }) {
  const navigateHandler = () => {
    navigation.navigate("menu");
  };

  return (
    <Box>
      <Button
        onPress={navigateHandler}
        rounded="100"
        bgColor="gray.100"
        p="10px"
        _text={{ color: "gray.400", fontWeight: "600" }}
      >
        <AntDesign name="caretdown" color="#a1a1aa" size={16} />
      </Button>
    </Box>
  );
}
export default UI;
