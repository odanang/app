import React from "react";
import { Text } from "native-base";
import Controller from "./Controller";

function UI({ loading, error, allInteractiveReactions = [], count = 0 }) {
  if (loading) return <Text></Text>;
  return (
    <Text color="gray.400" fontSize="12" fontWeight="600">
      {count ? count + " lượt thích" : ""}
    </Text>
  );
}
export default function InteractionReactionListTextWithCount(props) {
  return <Controller {...props} UI={UI} />;
}
