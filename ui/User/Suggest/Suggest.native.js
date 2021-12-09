import React from "react";
import { Text as RNText } from "react-native";
import { HStack, VStack, Box, Image, ScrollView } from "native-base";
import { RelationshipCreateButton } from "../../Relationship";
import Controller from "./Controller";
import { Link } from "@react-navigation/native";

function UI({ loading, error, friendsSuggest = [], count, refetch }) {
  const [suggested] = friendsSuggest;
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
            Bạn không có gợi ý kết bạn nào
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
          Những người bạn có thể biết
        </RNText>
      </Box>
      <ScrollView mb="140px">
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
                <Link to={{ screen: "users", params: { id: user.id } }}>
                  <Image
                    source={{
                      uri:
                        "https://odanang.net" +
                        (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
                    }}
                    alt={user.name}
                    w="70px"
                    h="70px"
                    mx="auto"
                    rounded="200px"
                  />
                </Link>
              </Box>
              <Link to={{ screen: "users", params: { id: user.id } }}>
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
              <RelationshipCreateButton toId={user.id} page={"SF"} />
            </VStack>
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
}
export default function UserListSuggest(props) {
  return <Controller {...props} UI={UI} />;
}
