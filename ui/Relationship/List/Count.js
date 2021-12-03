import { Text } from "native-base";
import React from "react";
import Controller from "./Controller";
function UI({ count }) {
  return <Text>{count}</Text>;
}
export default function RelationshipListCount(props) {
  return <Controller {...props} UI={UI} />;
}
