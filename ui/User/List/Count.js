import { Text } from "native-base";
import React from "react";
import Controller from "./Controller";
function UI({ count }) {
  return (
    <Text fontSize="inherit" fontWeight="inherit">
      {count}
    </Text>
  );
}
export { UI };
export default function UserListCount(props) {
  return <Controller {...props} UI={UI} />;
}
