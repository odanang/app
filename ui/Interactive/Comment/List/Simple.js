import React from "react";
import { Platform } from "react-native";
import InteractionCommentItemSimple from "../Item/Simple";
import { Button, Text, VStack } from "native-base";
import Controller from "./Controller";
import InteractionCommentCreateSimple from "../Create/Simple";
import InteractionCommentCreateButton from "../Create/Button";
import { useRoute } from "@react-navigation/core";

export function UI({
  loading,
  error,
  allInteractiveComments = [],
  interactive,
  count = 0,
  refetch = () => {},
  getMore,
  id,
}) {
  const { params = {} } = useRoute();
  const { id: idParams } = params;
  if (loading) return <Text></Text>;

  return (
    <VStack>
      {Platform.OS !== "web" && !idParams ? (
        <InteractionCommentCreateButton id={id} />
      ) : (
        <InteractionCommentCreateSimple
          my="10"
          interactive={interactive}
          onCompleted={(data) => {
            refetch();
          }}
        />
      )}
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
