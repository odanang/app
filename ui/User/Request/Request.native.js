import React from "react";
import { Text as RNText, ScrollView } from "react-native";
import { HStack, VStack, Box, Image, Spinner } from "native-base";
import {
  RelationshipUpdateButton,
  RelationshipDeleteDelete,
} from "../../Relationship";
import { Link } from "@react-navigation/native";
import Controller from "./Controller";
import LoadingSpinner from "../../Loading/LoadingSpinner";
function UI({ loading, error, allRelationships }) {
  if (loading) {
    return <LoadingSpinner />;
  }

  const [suggested] = allRelationships;
  if (!suggested) {
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
            Bạn không có lời mời kết bạn nào
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
            fontSize: 20,
            fontFamily: "Lexend_500Medium",
          }}
        >
          Lời mời kết bạn
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
          {allRelationships.map((relationship) => (
            <VStack
              key={relationship.id}
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
                <Link
                  to={{
                    screen: "users",
                    params: { id: relationship?.createdBy?.id },
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://odanang.net" +
                        (relationship?.createdBy?.avatar?.publicUrl ||
                          "/upload/img/no-image.png"),
                    }}
                    alt="alt"
                    w="70px"
                    h="70px"
                    mx="auto"
                    rounded="200px"
                  />
                </Link>
              </Box>
              <Link
                to={{
                  screen: "users",
                  params: { id: relationship?.createdBy?.id },
                }}
              >
                <Box pb="1" pt="2">
                  <RNText
                    style={{
                      fontWeight: "500",
                      fontSize: 14,
                      fontFamily: "Lexend_500Medium",
                      textAlign: "center",
                    }}
                  >
                    {relationship?.createdBy?.name}
                  </RNText>
                </Box>
              </Link>
              <RelationshipUpdateButton id={relationship.id} page={"FR"} />
              <RelationshipDeleteDelete id={relationship.id} page={"FR"} />
            </VStack>
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
}
export { UI };
export default function UserListRequest(props) {
  return <Controller {...props} UI={UI} />;
}
