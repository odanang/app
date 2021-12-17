import React, { useState, useContext, useRef, useEffect } from "react";
import { Platform } from "react-native";
import { Button, Box, VStack, Text, Container } from "native-base";
import { Link } from "@react-navigation/native";
import { UserSignOutButton } from "../ui/User";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useLinkTo } from "@react-navigation/native";

MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
Ionicons.loadFont();
AntDesign.loadFont();

import { AuthContext } from "../ui/Provider/Native";
export default function Menu({ navigation }) {
  const linkTo = useLinkTo();
  const currentUser = useContext(AuthContext).user;
  return (
    <Container w="full" mt={1} maxW="full" px="8px">
      <VStack alignItems="flex-start" w="full">
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
            onPress={() => linkTo(`/users/${currentUser?.id}`)}
            bgColor="white"
            justifyContent="flex-start"
            leftIcon={
              <MaterialCommunityIcons
                name="account"
                color="#22c55e"
                size={18}
                style={{ marginRight: 10 }}
              />
            }
          >
            <Text>Trang cá nhân</Text>
          </Button>
        </Box>
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
            onPress={() => linkTo("/friendsuggestion")}
            bgColor="white"
            justifyContent="flex-start"
            leftIcon={
              <MaterialCommunityIcons
                name="account-question"
                color="#22c55e"
                size={18}
                style={{ marginRight: 10 }}
              />
            }
          >
            <Text>Gợi ý bạn bè</Text>
          </Button>
        </Box>
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
            onPress={() => linkTo("/friendrequest")}
            bgColor="white"
            justifyContent="flex-start"
            leftIcon={
              <MaterialCommunityIcons
                name="account-plus"
                color="#22c55e"
                size={18}
                style={{ marginRight: 10 }}
              />
            }
          >
            <Text>Lời mời kết bạn</Text>
          </Button>
        </Box>
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
            onPress={() => linkTo("/userupdate")}
            bgColor="white"
            justifyContent="flex-start"
            leftIcon={
              <MaterialIcons
                name="settings"
                color="#22c55e"
                size={18}
                style={{ marginRight: 10 }}
              />
            }
          >
            <Link to={{ screen: "userupdate" }}>
              <Text>Cài đặt</Text>
            </Link>
          </Button>
        </Box>
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
            onPress={() => linkTo("/updatepassword")}
            w="full"
            bgColor="white"
            justifyContent="flex-start"
            leftIcon={
              <Ionicons
                name="lock-closed"
                color="#22c55e"
                size={18}
                style={{ marginRight: 10 }}
              />
            }
          >
            <Text>Đổi mật khẩu</Text>
          </Button>
        </Box>
        {/* <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
            w="full"
            onPress={() => linkTo("/album")}
            bgColor="white"
            justifyContent="flex-start"
            leftIcon={
              <MaterialCommunityIcons
                name="bookmark"
                color="#22c55e"
                size={18}
                style={{ marginRight: 10 }}
              />
            }
          >
            <Text>Lưu</Text>
          </Button>
        </Box> */}
        <Box w="full" py={2}>
          <UserSignOutButton navigation={navigation} />
        </Box>
      </VStack>
    </Container>
  );
}
