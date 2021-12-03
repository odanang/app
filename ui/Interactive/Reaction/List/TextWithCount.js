import React from "react";
import { Text } from "native-base";
import Controller from "./Controller";

function UI({ loading, error, allReactions, countLikeComment }) {
  return loading ? (
    <Text>...</Text>
  ) : (
    <Text color="gray.400" fontSize="12" fontWeight="600">
      {countLikeComment} lượt thích
    </Text>
  );
}
export default function InteractionReactionListTextWithCount(props) {
  return <Controller {...props} UI={UI} />;
}
