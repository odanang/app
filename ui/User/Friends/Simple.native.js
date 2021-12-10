import React from "react";
import { Text as RNText, ScrollView } from "react-native";
import { HStack, VStack, Box, Image, Text } from "native-base";
import { Link } from "@react-navigation/native";
import { RelationshipDeleteActive } from "../../Relationship";
import Controller from "../Friends/Controller";

function UI({ loading, error, allUsers }) {
  const [friends] = allUsers;
  if (!friends) {
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
            Bạn không có bạn bè nào
          </RNText>
        </Box>
      </VStack>
    );
  }

  return (
    <VStack w="100%">
      <Box w="full" mt="12px" my="20px" px="0.5%">
        <RNText
          style={{
            fontWeight: "500",
            fontFamily: "Lexend_500Medium",
            fontSize: 20,
          }}
        >
          Tất cả bạn bè
        </RNText>
      </Box>
      <ScrollView mb="140px">
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
              <Link to="/">
                <Box mb="1" pt="2">
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
              <RelationshipDeleteActive toId={user.id} page={"SF"} />
            </VStack>
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
}
export { UI };
export default function UserListSimple(props) {
  return <Controller {...props} UI={UI} />;
}
