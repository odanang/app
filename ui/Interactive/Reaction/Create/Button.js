import React, { useState, Fragment, useContext } from "react";
import { Button, Text } from "native-base";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Controller from "./Controller";
import { AuthContext } from "../../../Provider/Native";

export function UI({
  handleClick,
  createResult,
  deleteResult,
  reacted,
}) {
  if (createResult.loading) return <Text>Đang tải</Text>;
  if (deleteResult.loading) return <Text>Đang tải</Text>;

  return (
    <Fragment>
      {reacted ? (
        <Button
          _text={{ color: "green.500", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FaHeart color="#22c55e" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={handleClick}
        >
          Thích
        </Button>
      ) : (
        <Button
          _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FaRegHeart color="#a1a1aa" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={handleClick}
        >
          Thích
        </Button>
      )}
    </Fragment>
  );
}
export default function InteractionReactionCreateButton(props) {
  return <Controller {...props} UI={UI} />;
}
