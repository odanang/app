import React, { Fragment, useContext, useState } from "react";
import { Button, Text } from "native-base";
import Controller from "./Controller";
import { AuthContext } from "../../../Provider/Native";

function UI({
  interactive,
  handleClick,
  createResult,
  deleteResult,
  reactions,
  reacted,
}) {
  return (
    <Fragment>
      {reacted ? (
        <Button
          _text={{ color: "green.500", fontSize: "12", fontWeight: "600" }}
          p="0"
          bgColor="transparent"
          onPress={handleClick}
          disabled={createResult.loading || deleteResult.loading}
        >
          Thích
        </Button>
      ) : (
        <Button
          _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
          p="0"
          bgColor="transparent"
          onPress={handleClick}
          disabled={createResult.loading || deleteResult.loading}
        >
          Thích
        </Button>
      )}
    </Fragment>
  );
}
export default function InteractionReactionCreateText(props) {
  return <Controller {...props} UI={UI} />;
}
