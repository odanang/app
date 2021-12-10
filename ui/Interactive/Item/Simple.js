import React, { Fragment, useState } from "react";
import { Box, HStack, Text } from "native-base";
import InteractionCommentCreateSimple from "../Comment/Create/Simple";
import InteractionCommentListSimple from "../Comment/List/Simple";
import Controller from "./Controller";
import { InteractionReactionCreateButton, InteractionReactionListIconTextWithCount } from "../Reaction";
import { InteractionCommentListToggleButton } from "../Comment";
import { AlbumCreateButton } from "../../Album";
export function UI({ loading, error, interactive, user, refetch, getMore, count }) {
  const [openComment, setOpenComment] = useState(true)
  function pressComment() {
    setOpenComment(status => !status)
  }
  if (loading) return <Text>Đang tải</Text>;
  return (
    <Fragment>
      <Box px="3" mt="2">
        <InteractionReactionListIconTextWithCount
          existing={{ allInteractiveReactions: interactive.reactions, count: interactive._reactionsMeta.count }}
        />
      </Box>
      <Box px="3">
        <HStack
          w="full"
          my="2"
          borderBottomWidth="1"
          borderBottomColor="gray.100"
          borderTopWidth="1"
          borderTopColor="gray.100"
          justifyContent="space-around"
        >
          <Box w="33%">
            <InteractionReactionCreateButton
              interactive={interactive}
              onCompleted={() => {
                refetch()
              }}
              onError={() => {
                refetch()
              }}
            />
          </Box>
          <Box w="33%">
            <InteractionCommentListToggleButton onPress={pressComment} />
          </Box>
          <Box w="33%">
            <AlbumCreateButton />
          </Box>
        </HStack>
      </Box>
      <Box w="full">
        {openComment && <InteractionCommentListSimple
          existing={{ interactive, allInteractiveComments: interactive?.comments, _allInteractiveCommentsMeta: interactive.commentsMeta, refetch }}
        />}
      </Box>
    </Fragment>

  );
}
export default function InteractiveItemSimple(props) {
  return <Controller {...props} UI={UI} />;
}
