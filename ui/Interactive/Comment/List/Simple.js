import React from "react";
import InteractionCommentItemSimple from "../Item/Simple";
import { Button, Text, VStack } from "native-base";
import Controller from "./Controller";
import InteractionCommentCreateSimple from "../Create/Simple";

export function UI({
  loading,
  error,
  allInteractiveComments = [],
  interactive,
  count = 0,
  refetch = () => {},
  getMore,
}) {
  if (loading) return <Text>Đang tải</Text>;
  return (
    <VStack>
      <InteractionCommentCreateSimple
        my="10"
        interactive={interactive}
        onCompleted={(data) => {
          refetch();
        }}
      />
      {allInteractiveComments.map((comment) => {
        return (
          <InteractionCommentItemSimple
            key={comment.id}
            existing={{
              comment,
              onDeleted: (data) => {
                refetch();
              },
            }}
          />
        );
      })}
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
  return <Controller {...props} UI={UI} />;
}
