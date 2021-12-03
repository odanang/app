import React from "react";
import { UI as InteractionCommentItemSimple } from "../Item/Simple";
import { Button, VStack } from "native-base";
import { CommentListController } from "./Controller";

export function UI({
  loading,
  error,
  allInteractiveComments = [],
  count = 0,
  refetchInteractiveItem,
  getMore,
}) {
  // Map list comments => InteractionCommentItemSimple
  if (loading) return "...";
  return (
    <VStack>
      {allInteractiveComments.map((comment) => {
        return (
          <InteractionCommentItemSimple
            key={comment.id}
            comment={comment}
            refetchInteractiveItem={refetchInteractiveItem}
          />
        );
      })}
      {/* More comments */}
      {count > allInteractiveComments.length && (
        <Button
          _text={{
            color: "gray.500",
            fontSize: "12",
            fontWeight: "600",
          }}
          p="0"
          bgColor="transparent"
          onPress={getMore}
        >
          Xem thêm bình luận
        </Button>
      )}
    </VStack>
  );
}
export default function InteractionCommentListSimple(props) {
  return <CommentListController {...props} UI={UI} />;
}
