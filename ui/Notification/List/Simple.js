import React from "react";
import { Box, VStack, Text, Spinner } from "native-base";
import NotificationItemSimple from "../Item/Simple";
import Controller from "./Controller";

function UI({ loading, error, data, allRelationships }) {
  if (loading)
    return (
      <Box position="absolute" top="10" right="0" w="300px">
        <VStack
          px="20px"
          py="15px"
          bgColor="white"
          rounded="8px"
          borderWidth="1px"
          borderColor="gray.100"
          alignItems="center"
        >
          <Spinner color="green.500" size="lg" />
        </VStack>
      </Box>
    );

  const [notification] = data;
  if (!notification) {
    return (
      <Box position="absolute" top="10" right="0" w="300px">
        <VStack
          px="20px"
          py="15px"
          bgColor="white"
          rounded="8px"
          borderWidth="1px"
          borderColor="gray.100"
          alignItems="center"
        >
          <Text>Bạn không có thông báo nào</Text>
        </VStack>
      </Box>
    );
  }

  return (
    <Box position="absolute" top="10" right="0" w="300px">
      <VStack
        py="8px"
        bgColor="white"
        rounded="8px"
        borderWidth="1px"
        borderColor="gray.100"
        alignItems="flex-start"
      >
        {data.map((item) => (
          <NotificationItemSimple key={item.id} item={item} />
        ))}
      </VStack>
    </Box>
  );
}
export default function NotificationListSimple(props) {
  return <Controller {...props} UI={UI} />;
}
