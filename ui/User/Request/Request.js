import React, { useState } from "react";
import { HStack, VStack, Box, Image, Text, Divider } from "native-base";
import {
  RelationshipUpdateButton,
  RelationshipDeleteDelete,
} from "../../Relationship";
import Controller from "./Controller";
function UI({ loading, error, allRelationships }) {
  if (loading) return "loading";
  if (error) return "error";
  return (
    <VStack w="100%">
      <Box w="full" mt="20px" mb="8px" px="0.5%">
        <Text fontSize="18px" fontWeight="600" color="gray.700">
          Lời mời kết bạn
        </Text>
      </Box>

      <HStack
        maxW="full"
        mx="auto"
        w="full"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {allRelationships.map((relationship) => (
          <VStack
            key={relationship.id}
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
              <Image
                source={{
                  uri:
                    "https://odanang.net" +
                    (relationship?.createdBy?.avatar?.publicUrl ||
                      "/upload/img/no-image.png"),
                }}
                alt="Profile Image"
                size="80px"
                mx="auto"
                mt="8px"
                rounded="100"
              />
            </Box>
            <Text my="8px" fontWeight="600">
              {relationship?.createdBy?.name}
            </Text>
            <RelationshipUpdateButton id={relationship.id} page={"FR"} />
            <RelationshipDeleteDelete id={relationship.id} page={"FR"}/>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
export { UI };
export default function UserListRequest(props) {
  return <Controller {...props} UI={UI} />;
}
