import React, { useState } from "react";
import { HStack, VStack, Box, Image, Text, Spinner } from "native-base";
import {
  RelationshipCreateButton,
  RelationshipDeleteDelete,
} from "../../Relationship";
import Controller from "./Controller";
import { Link } from "@react-navigation/native";
import LoadingSpinner from "../../Loading/LoadingSpinner";

function UI({ loading, error, friendsSuggest = [], count, refetch }) {
  if (loading) return <LoadingSpinner />;

  const [suggested] = friendsSuggest;
  if (!suggested) {
    return (
      <VStack w="100%">
        <Text
          textAlign="center"
          fontSize="18px"
          fontWeight="600"
          color="gray.700"
          mt="40px"
        >
          Bạn không có gợi ý kết bạn nào
        </Text>
      </VStack>
    );
  }

  return (
    <VStack w="100%">
      <Box w="full" mt="20px" mb="8px" px="0.5%">
        <Text fontSize="18px" fontWeight="600" color="gray.700">
          Những người bạn có thể biết
        </Text>
      </Box>
      <HStack
        maxW="100%"
        mx="auto"
        w="100%"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {friendsSuggest.map((user) => (
          <VStack
            key={user.id}
            p="12px"
            minW={["49%", "32%", "24%"]}
            m="0.5%"
            space={["4px", "6px"]}
            alignItems="center"
            borderWidth="1px"
            borderColor="gray.100"
            rounded="8px"
          >
            <Box>
              <Link to={{ screen: "users", params: { id: user.id } }}>
                <Image
                  source={{
                    uri:
                      "https://odanang.net" +
                      (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
                  }}
                  alt={user.name}
                  size="80px"
                  mx="auto"
                  mt="8px"
                  rounded="100"
                />
              </Link>
            </Box>
            <Link to={{ screen: "users", params: { id: user.id } }}>
              <Box my="1">
                <Text color="gray.700" fontWeight="600" textAlign="center">
                  {user.name}
                </Text>
              </Box>
            </Link>
            <RelationshipCreateButton toId={user.id} page={"SF"} />
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
export default function UserListSuggest(props) {
  return <Controller {...props} UI={UI} />;
}
