import React from "react";
import Controller from "./Controller";
import { Text } from "native-base";
function UI({ count }) {
  return <Text>{count}</Text>;
}
export default function PostListCount(props) {
  return <Controller {...props} UI={UI} />;
}
