import React, { Fragment, useState } from "react";
import { Button } from "native-base";
import Controller from "./Controller";
export function UI({ onPress, comment }) {
  return (
    <Fragment>
      <Button
        _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
        p="0"
        bgColor="transparent"
        onPress={onPress}
      >
        Trả lời
      </Button>
    </Fragment>
  );
}
export default function InteractionCommentUpdate(props) {
  return <Controller {...props} UI={UI} />;
}
