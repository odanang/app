import React, { useState } from "react";
import { HStack, VStack, Box, Image, Text, Heading, Spacer } from "native-base";
import { Link } from "@react-navigation/native";
import Controller from "./Controller";

function UI({ friendsSuggest }) {
  return (
    <VStack my="2" w="full">
      <HStack mb="2" w="full">
        <Text fontSize="16" fontWeight="600" color="gray.400">
          Gợi ý cho bạn
        </Text>
        <Spacer />
        <Link to={{ screen: "friendsuggestion" }}>
          <Text color="green.500">Xem thêm</Text>
        </Link>
      </HStack>

      {friendsSuggest?.map((user) => (
        <HStack
          key={user.id}
          m="1"
          mt="3"
          flex="1"
          maxw="full"
          w="260px"
          alignItems="center"
          rounded="8"
          space="4"
        >
          <Box>
            <Image
              source={{
                uri:
                  "https://odanang.net" +
                  (user?.avatar ? user.avatar.publicUrl : "/upload/img/no-image.png"),
              }}
              alt="img"
              size="8"
              mx="auto"
              rounded="100"
            />
          </Box>
          <Link to={{ screen: "users", params: { id: user.id } }}>
            <Text fontWeight="600" color="gray.700">
              {user.name}
            </Text>
          </Link>
        </HStack>
      ))}
    </VStack>
  );
}
export default function UserListSuggestFixed(props) {
  return <Controller {...props} UI={UI} />;
}
