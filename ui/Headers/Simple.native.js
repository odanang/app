import React from "react";
import { Container, HStack, Box, Image, Text } from "native-base";
import AuthController from "../User/Auth/Controller";
import { Link } from "@react-navigation/native";
import { UserAuthShort } from "../User";
import Options from "./Options";
import { NotificationListToggle } from "../Notification";
import HeadersSearch from "./Search";

function UI({ user, navigation, route, options, back }) {
  return null;
}
export default function HeaderSimple(props) {
  return <AuthController {...props} UI={UI} />;
}
