import React, { Fragment, useState } from "react";
import { Box, HStack, Text } from "native-base";
import Controller from "./Controller";
import { InteractionReactionCreateText, InteractionReactionListTextWithCount } from "../Reaction";
export function UI({ loading, error, timeAgo, interactive, user = {}, refetch, getMore, count }) {
  const [openComment, setOpenComment] = useState(true)
  function pressComment() {
    setOpenComment(status => !status)
  }
  if (loading) return <Text>Đang tải</Text>;
  return (
    <Fragment>
      <Box px="3" mt="2">
        <HStack ml="3" mt="1" space="3">
          <InteractionReactionCreateText
            interactive={interactive}
            onCompleted={data => {
              refetch()
            }}
          />
          <InteractionReactionListTextWithCount
            existing={{ count: interactive._reactionsMeta.count }}
          />
          <Text color="gray.400" fontSize="12">
            {timeAgo}
          </Text>
        </HStack>
      </Box>
    </Fragment>

  );
}
export default function InteractiveItemShort(props) {
  return <Controller {...props} UI={UI} />;
}
