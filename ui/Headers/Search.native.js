import React, { useState } from "react";
import { Box, Input, FormControl } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link, useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/core";

Ionicons.loadFont();

function UI({}) {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const submitHandler = (e) => {
    if (searchText.trim()) {
      setSearchText("");
      navigation.navigate("result", { keyword: searchText.trim() });
    }
  };

  return (
    <FormControl>
      <Input
        onEndEditing={submitHandler}
        onChangeText={(value) => setSearchText(value)}
        value={searchText}
        bgColor="white"
        p={3}
        borderWidth="1"
        borderColor="gray.100"
        rounded="8"
        placeholder="Tìm kiếm trên Odanang"
        fontFamily="Lexend_400Regular"
        fontSize="14"
        w="full"
        mt={2}
        _focus={{
          borderColor: "green.500",
        }}
      />
    </FormControl>
  );
}
export default UI;
