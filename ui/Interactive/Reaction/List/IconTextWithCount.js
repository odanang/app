import React from "react";
import { HStack, Text } from "native-base";
import Controller from "./Controller";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont();

function UI({ loading, error, allInteractiveReactions = [], count = 0 }) {
  return loading ? (
    <Text>...</Text>
  ) : (
    <HStack alignItems="center" space="1">
      <FontAwesome
        name="heart"
        color="#22c55e"
        size={18}
        style={{ marginTop: "-2px" }}
      />
      <Text color="gray.800" fontSize="14" fontWeight="500">
        {count ? count + ' lượt thích' : 'Hãy là người đầu tiên thích'}

      </Text>
    </HStack>
  );
}
export default function InteractionReactionListIconTextWithCount(props) {
  return <Controller {...props} UI={UI} />;
}
