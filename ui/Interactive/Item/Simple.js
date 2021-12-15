import React, { Fragment, useState, useEffect } from "react";
import { Box, HStack, Text, Button } from "native-base";
import InteractionCommentCreateSimple from "../Comment/Create/Simple";
import InteractionCommentListSimple from "../Comment/List/Simple";
import Controller from "./Controller";
import {
  InteractionReactionCreateButton,
  InteractionReactionListIconTextWithCount,
} from "../Reaction";
import { InteractionCommentListToggleButton } from "../Comment";
import { AlbumCreateButton } from "../../Album";

export function UI({
  loading,
  error,
  interactive,
  user,
  refetch,
  loadMore = () => {},
  count,
  id,
  isRefreshing,
}) {
  if (loading) return <Text></Text>;

  useEffect(() => {
    refetch();
  }, [isRefreshing]);

  return (
    <Fragment>
      <Box px="3" mt="2">
        <InteractionReactionListIconTextWithCount
          existing={{
            allInteractiveReactions: interactive.reactions,
            count: interactive._reactionsMeta.count,
          }}
        />
      </Box>
      <Box px="3">
        <HStack
          w="full"
          my="2"
          py="0.5"
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
                refetch();
              }}
              onError={() => {
                refetch();
              }}
            />
          </Box>
          <Box w="33%">
            <InteractionCommentListToggleButton />
          </Box>
          <Box w="33%">
            <AlbumCreateButton />
          </Box>
        </HStack>
      </Box>
      <Box px="3">
        <InteractionCommentListSimple
          id={id}
          existing={{
            interactive,
            allInteractiveComments: interactive?.comments,
            _allInteractiveCommentsMeta: interactive.commentsMeta,
            refetch,
          }}
        />
        {interactive.comments.length < interactive._commentsMeta.count && (
          <Button
            w="150px"
            bgColor="transparent"
            alignItems="flex-start"
            justifyContent="flex-start"
            px="1"
            _text={{
              color: "gray.400",
              color: "black",
              fontSize: ["13", "14"],
              fontWeight: "600",
            }}
            rounded="8"
            onPress={() => {
              loadMore();
            }}
          >
            Tải thêm bình luận ...
          </Button>
        )}
      </Box>
    </Fragment>
  );
}
export default function InteractiveItemSimple(props) {
  return <Controller {...props} UI={UI} />;
}
