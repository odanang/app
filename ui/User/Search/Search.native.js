import React from "react";
import { HStack, VStack, Box, Image } from "native-base";
import { Text as RNText, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import {
  RelationshipCreateButton,
  RelationshipDeleteDelete,
  RelationshipUpdateButton,
  RelationshipDeleteActive,
  RelationshipDeleteCancel,
} from "../../Relationship";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import Controller from "./Controller";

function UI({ loading, error, allUsers = [] }) {
  if (loading) {
    return <LoadingSpinner />;
  }

  const [result] = allUsers;
  if (!result) {
    return (
      <VStack w="100%">
        <Box mt="30px">
          <RNText
            style={{
              fontWeight: "500",
              fontSize: 20,
              textAlign: "center",
              fontFamily: "Lexend_500Medium",
            }}
          >
            Không tìm thấy kết quả phù hợp
          </RNText>
        </Box>
      </VStack>
    );
  }

  return (
    <ScrollView mb="240px">
      <HStack
        maxW="full"
        mx="auto"
        w="full"
        flexWrap="wrap"
        justifyContent="flex-start"
        mb="240px"
      >
        {allUsers.map((user, index) => (
          <VStack
            key={user.id}
            p="12px"
            pt="22px"
            w="49%"
            m="0.5%"
            space="4px"
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
                  w="70px"
                  h="70px"
                  mx="auto"
                  rounded="200px"
                />
              </Link>
            </Box>
            <Link to={{ screen: "users", params: { id: user?.id } }}>
              <Box pb="1" pt="2">
                <RNText
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    fontFamily: "Lexend_500Medium",
                  }}
                >
                  {user.name}
                </RNText>
              </Box>
            </Link>
          </VStack>
        ))}
      </HStack>
    </ScrollView>
  );
}
export { UI };
export default function UserListSearch(props) {
  return <Controller {...props} UI={UI} />;
}
