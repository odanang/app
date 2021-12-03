import React from "react";
import { Box } from "native-base";
import InteractionCommentCreateSimple from "../Comment/Create/Simple";
import { UI as InteractionCommentListSimple } from "../Comment/List/Simple";
import Controller from "./Controller";
function UI({ loading, error, interactive, refetch, getMore, count }) {
  if (loading) return "...";
  return (
    <Box w="full">
      <InteractionCommentCreateSimple
        my="10"
        interactive={interactive}
        refetch={refetch}
      />
      <InteractionCommentListSimple
        allInteractiveComments={interactive?.comments}
        refetchInteractiveItem={refetch}
        getMore={getMore}
        count={count}
      />
    </Box>
  );
}
export default function InteractiveItemSimple(props) {
  return <Controller {...props} UI={UI} />;
}
