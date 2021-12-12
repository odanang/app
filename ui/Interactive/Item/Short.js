import React, { Fragment, useState } from "react";
import { Box, HStack, Text } from "native-base";
import Controller from "./Controller";
import {
  InteractionReactionCreateText,
  InteractionReactionListTextWithCount,
} from "../Reaction";
export function UI({
  loading,
  error,
  timeAgo,
  interactive,
  user = {},
  refetch,
  loadMore,
  count,
}) {
  const [openComment, setOpenComment] = useState(true);
  function pressComment() {
    setOpenComment((status) => !status);
  }
  if (loading) return <Text></Text>;
  return (
    <HStack space="2">
      <InteractionReactionCreateText
        interactive={interactive}
        onCompleted={(data) => {
          refetch();
        }}
      />
      <InteractionReactionListTextWithCount
        existing={{ count: interactive._reactionsMeta.count }}
      />
      <Text color="gray.400" fontSize="12">
        {timeAgo}
      </Text>
    </HStack>
  );
}
export default function InteractiveItemShort(props) {
  return <Controller {...props} UI={UI} />;
}
