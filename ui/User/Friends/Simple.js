import React, { Fragment, useState } from "react";
import { HStack, VStack, Box, Image, Text, Divider } from "native-base";
import { Link } from "@react-navigation/native";
import {
  RelationshipCreateButton,
  RelationshipDeleteDelete,
  RelationshipUpdateButton,
  RelationshipDeleteActive,
  RelationshipDeleteCancel,
} from "../../Relationship";
import Controller from "../Friends/Controller";
// Fetch 12 items

function UI({ loading, error, allUsers }) {
  return (
    <VStack>
      <Box w="full" mt="20px" mb="8px" px="0.5%">
        <Text fontSize="18px" fontWeight="600" color="gray.700">
          Tất cả bạn bè
        </Text>
      </Box>

      <HStack
        maxw="full"
        mx="auto"
        w="full"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {allUsers.map((user) => (
          <HStack
            key={user.id}
            p="12px"
            pl={["8px", "12px"]}
            minW={["100%", "99%", "49%"]}
            m="0.5%"
            mx={["0", "0.5%"]}
            space={["0", "6px"]}
            alignItems="center"
            borderWidth="1px"
            borderColor="gray.100"
            rounded="8px"
            justifyContent="space-between"
          >
            <HStack alignItems="center" space={["12px", "16px"]}>
              <Box>
                <Link to={{ screen: "users", params: { id: user?.id } }} >
                  <Image
                    source={{
                      uri:
                        "https://odanang.net" +
                        (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
                    }}
                    alt="Profile Image"
                    size={["48px", "72px"]}
                    mx="auto"
                    my={["10px", "6px"]}
                    rounded="100"
                  />
                </Link>
              </Box>
              <Link to={{ screen: "users", params: { id: user?.id } }} >
                <Text my="8px" fontWeight="600">
                  {user.name}
                </Text>
              </Link>
            </HStack>
            {/* {item.type === "pending" && (
              <VStack space="6px">
                <Box w="120px">
                  <RelationshipUpdateButton />
                </Box>
                <Box w="120px">
                  <RelationshipDeleteDelete />
                </Box>
              </VStack>
            )}
            {item.type === "no" && (
              <Box w="120px">
                <RelationshipCreateButton />
              </Box>
            )}
            {item.type === "yes" && (
              <Box w="120px">
                <RelationshipDeleteActive />
              </Box>
            )}
            {item.type === "sending" && (
              <Box w="120px">
                <RelationshipDeleteCancel />
              </Box>
            )} */}
          </HStack>
        ))}
      </HStack>
    </VStack >
  );
}
export { UI };
export default function UserListSimple(props) {
  return <Controller {...props} UI={UI} />;
}
