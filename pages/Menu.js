import React, { useState, useContext, useRef, useEffect } from "react";
import { Platform } from "react-native";
import { Button, Box, VStack, Text, Container } from "native-base";
import { Link } from "@react-navigation/native";
import { UserSignOutButton } from "../ui/User";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
Ionicons.loadFont();
AntDesign.loadFont();

import { AuthContext } from "../ui/Provider/Native";
export default function Menu({ navigation }) {
  const currentUser = useContext(AuthContext).user;
  return (
    <Container w="full" mt={1} maxW="full" px="8px">
      <VStack alignItems="flex-start" w="full">
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
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
            <Link to={{ screen: "users", params: { id: currentUser.id } }}>
              <Text>Trang cá nhân</Text>
            </Link>
          </Button>
        </Box>
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
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
            <Link to={{ screen: "friendsuggestion" }}>
              <Text>Gợi ý bạn bè</Text>
            </Link>
          </Button>
        </Box>
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
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
            <Link to={{ screen: "friendrequest" }}>
              <Text>Lời mời kết bạn</Text>
            </Link>
          </Button>
        </Box>
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
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
            <Link to={{ screen: "updatepassword" }}>
              <Text>Đổi mật khẩu</Text>
            </Link>
          </Button>
        </Box>
        <Box borderBottomColor="gray.100" borderBottomWidth="1" w="full" py={2}>
          <Button
            w="full"
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
            <Link to={{ screen: "album" }}>
              <Text>Lưu</Text>
            </Link>
          </Button>
        </Box>
        <Box w="full" py={2}>
          <UserSignOutButton navigation={navigation} />
        </Box>
      </VStack>
    </Container>
  );
}
