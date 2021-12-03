import React from "react";
import { HStack, Text } from "native-base";
import { FaHeart } from "react-icons/fa";
import Controller from "./Controller";

function UI({ loading, error, allReactions, _allReactionsMeta }) {
  return loading ? (
    <Text>...</Text>
  ) : (
    <HStack alignItems="center" space="1">
      <FaHeart color="#22c55e" size="16" />
      <Text color="gray.800" fontSize="14" fontWeight="500">
        {_allReactionsMeta?.count} lượt thích
      </Text>
    </HStack>
  );
}
export default function InteractionReactionListIconTextWithCount(props) {
  return <Controller {...props} UI={UI} />;
}
