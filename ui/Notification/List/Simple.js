import React from "react";
import { Box, VStack } from "native-base";
import NotificationItemSimple from "../Item/Simple";
import { Link } from "@react-navigation/native";
import Controller from "./Controller";

function UI({ loading, error, data, allRelationships }) {
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
