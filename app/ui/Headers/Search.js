import React from "react";
import { Box, Input, FormControl } from "native-base";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "@react-navigation/native";

function UI({ navigation }) {
  const submitHandler = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };

  return (
    <Box position="relative" right="0">
      <FormControl>
        <Input
          onKeyPress={submitHandler}
          bgColor="white"
          px={2}
          pl="8"
          fontSize={14}
          borderWidth={1}
          borderColor="gray.100"
          rounded={6}
          placeholder="Tìm kiếm trên Kilogram"
          w="250px"
          display={["none", "none", "block"]}
          _focus={{
            borderColor: "green.500",
          }}
        />
      </FormControl>
      <Box position="absolute" top="2.5" left="2.5">
        <HiOutlineSearch color="#a1a1aa" />
      </Box>
    </Box>
  );
}
export default UI;