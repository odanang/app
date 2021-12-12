import React, { useState, Fragment, useContext } from "react";
import { Button, Text } from "native-base";
import { Text as RNText, Platform } from "react-native";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Controller from "./Controller";
import { AuthContext } from "../../../Provider/Native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont();

export function UI({ handleClick, createResult, deleteResult, reacted }) {
  const style = Platform.OS === "web" ? { marginTop: -2 } : {};
  return (
    <Fragment>
      {reacted ? (
        <Button
          _text={{ color: "green.500", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={
            <FontAwesome name="heart" color="#22c55e" size={18} style={style} />
          }
          _hover={{ bgColor: "gray.100" }}
          onPress={handleClick}
          disabled={createResult.loading || deleteResult.loading}
        >
          {Platform.OS !== "web" ? (
            <RNText
              style={{
                color: "#22c55e",
                fontWeight: "500",
                fontFamily: "Lexend_500Medium",
              }}
            >
              Thích
            </RNText>
          ) : (
            "Thích"
          )}
        </Button>
      ) : (
        <Button
          _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={
            <FontAwesome
              name="heart-o"
              color="#a1a1aa"
              size={18}
              style={style}
            />
          }
          _hover={{ bgColor: "gray.100" }}
          onPress={handleClick}
          disabled={createResult.loading || deleteResult.loading}
        >
          {Platform.OS !== "web" ? (
            <RNText
              style={{
                color: "#a1a1aa",
                fontWeight: "500",
                fontFamily: "Lexend_500Medium",
              }}
            >
              Thích
            </RNText>
          ) : (
            "Thích"
          )}
        </Button>
      )}
    </Fragment>
  );
}
export default function InteractionReactionCreateButton(props) {
  return <Controller {...props} UI={UI} />;
}
