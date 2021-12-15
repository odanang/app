import React from "react";
import { ScrollView, Text as RNText } from "react-native";
import { Box, VStack, Spinner } from "native-base";
import NotificationItemSimple from "../Item/Simple";
import { Link } from "@react-navigation/native";
import Controller from "./Controller";
import LoadingSpinner from "../../Loading/LoadingSpinner";

function UI({ loading, error, data = [], allRelationships }) {
  if (loading) {
    return <LoadingSpinner />;
  }

  const [notification] = data;
  if (!notification) {
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
            Bạn không có thông báo nào
          </RNText>
        </Box>
      </VStack>
    );
  }

  return (
    <VStack w="full">
      <Box w="full" my="3" mb="1" px="0.5%">
        <RNText
          style={{
            fontWeight: "500",
            fontFamily: "Lexend_500Medium",
            fontSize: 20,
          }}
        >
          Thông báo
        </RNText>
      </Box>
      <VStack w="full" py="0" bgColor="white" alignItems="flex-start">
        <ScrollView style={{ width: "100%" }}>
          {data.map((item) => (
            <Box
              alignItems="flex-start"
              key={item.id}
              w="full"
              borderBottomColor="gray.100"
              borderBottomWidth="1"
              py="2"
            >
              <NotificationItemSimple item={item} />
            </Box>
          ))}
        </ScrollView>
      </VStack>
    </VStack>
  );
}
export default function NotificationListSimple(props) {
  return <Controller {...props} UI={UI} />;
}
