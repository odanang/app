import React, { Fragment, useState } from "react";
import { HStack, VStack, Box, Image, Text, Spinner } from "native-base";
import { Link } from "@react-navigation/native";
import { RelationshipDeleteActive } from "../../Relationship";
import Controller from "../Friends/Controller";
import LoadingSpinner from "../../Loading/LoadingSpinner";

function UI({ loading, error, allUsers, refetch }) {
  if (loading) return <LoadingSpinner />;

  const [friends] = allUsers;
  if (!friends) {
    return (
      <VStack w="100%">
        <Text
          textAlign="center"
          fontSize="18px"
          fontWeight="600"
          color="gray.700"
          mt="40px"
        >
          Bạn không có bạn bè nào
        </Text>
      </VStack>
    );
  }

  return (
    <VStack w="100%">
      <Box w="full" mt="20px" mb="8px" px="0.5%">
        <Text fontSize="18px" fontWeight="600" color="gray.700">
          Tất cả bạn bè
        </Text>
      </Box>
      <HStack
        maxW="full"
        mx="auto"
        w="full"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {allUsers.map((user) => (
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
              <Link to={{ screen: "users", params: { id: user?.id } }}>
                <Image
                  source={{
                    uri:
                      "https://odanang.net" +
                      (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
                  }}
                  alt={user?.name}
                  size="80px"
                  mx="auto"
                  mt="8px"
                  rounded="100"
                />
              </Link>
            </Box>
            <Link to={{ screen: "users", params: { id: user?.id } }}>
              <Box my="1">
                <Text color="gray.700" fontWeight="600" textAlign="center">
                  {user.name}
                </Text>
              </Box>
            </Link>
            {console.log(user)}
            <RelationshipDeleteActive
              id={user.idRelationship}
              page={"FP"}
              refetchFriends={refetch}
            />
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
export { UI };
export default function UserListSimple(props) {
  return <Controller {...props} UI={UI} />;
}
