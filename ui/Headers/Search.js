import React, { useState } from "react";
import { Box, Input, FormControl } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link, useNavigation } from "@react-navigation/native";

Ionicons.loadFont();

function UI({}) {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const submitHandler = (e) => {
    if (e.key === "Enter" && searchText.trim()) {
      navigation.navigate("result", { keyword: searchText.trim() });
    }
  };

  return (
    <Box position="relative" right="0" display={["none", "none", "block"]}>
      <FormControl>
        <Input
          onKeyPress={submitHandler}
          onChangeText={(value) => setSearchText(value)}
          value={searchText}
          bgColor="white"
          px="2"
          py="1.5"
          pl="8"
          borderWidth="1"
          borderColor="gray.100"
          rounded="6"
          placeholder="Tìm kiếm trên Odanang"
          fontFamily="Lexend_400Regular"
          fontSize="14"
          w="250px"
          _focus={{
            borderColor: "green.500",
          }}
        />
      </FormControl>
      <Box position="absolute" top="2.5" left="2.5" size="14">
        <Ionicons name="search" size={16} color="#a1a1aa" />
      </Box>
    </Box>
  );
}
export default UI;
