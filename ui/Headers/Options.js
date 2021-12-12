import React, { useState, useContext, useRef, useEffect } from "react";
import { Button, Box, VStack, Text } from "native-base";
import { Link } from "@react-navigation/native";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RiUser3Fill, RiDownloadCloudFill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { UserSignOutButton } from "../User";
import { AuthContext } from "../Provider/Native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
Ionicons.loadFont();
AntDesign.loadFont();

function UI({ navigation }) {
  const ref = useRef();
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const optionsHandler = () => {
    setIsOpenOptions((prev) => !prev);
  };
  const currentUser = useContext(AuthContext).user;

  useEffect(() => {
    const hideOptions = (e) => {
      if (isOpenOptions && ref.current && !ref.current.contains(e.target)) {
        setIsOpenOptions(false);
      }
    };
    document.addEventListener("mousedown", hideOptions);
    return () => {
      document.removeEventListener("mousedown", hideOptions);
    };
  }, [isOpenOptions]);

  return (
    <Box position="relative" right="0" ref={ref}>
      <Button
        onPress={optionsHandler}
        rounded="100"
        bgColor="gray.100"
        p="10px"
        _text={{ color: "gray.400", fontWeight: "600" }}
      >
        {/* <BsFillCaretDownFill color="#a1a1aa" /> */}
        <AntDesign name="caretdown" color="#a1a1aa" size={16} />
      </Button>
      {isOpenOptions && (
        <Box position="absolute" top="40px" right="0" w="200px">
          <VStack
            space="6px"
            bgColor="white"
            p="8px"
            rounded="8px"
            borderWidth="1px"
            borderColor="gray.100"
            alignItems="flex-start"
          >
            <Button
              bgColor="white"
              // leftIcon={<RiUser3Fill color="#22c55e" />}
              leftIcon={
                <MaterialCommunityIcons
                  name="account"
                  color="#22c55e"
                  size={18}
                  style={{ marginRight: 10 }}
                />
              }
              onPress={optionsHandler}
            >
              <Link to={{ screen: "users", params: { id: currentUser.id } }}>
                <Text>Trang cá nhân</Text>
              </Link>
            </Button>
            <Button
              bgColor="white"
              // leftIcon={<MdSettings color="#22c55e" />}
              leftIcon={
                <MaterialIcons
                  name="settings"
                  color="#22c55e"
                  size={18}
                  style={{ marginRight: 10 }}
                />
              }
              onPress={optionsHandler}
            >
              <Link to={{ screen: "userupdate" }}>
                <Text>Cài đặt</Text>
              </Link>
            </Button>
            <Button
              bgColor="white"
              // leftIcon={<HiLockClosed color="#22c55e" />}
              leftIcon={
                <Ionicons
                  name="lock-closed"
                  color="#22c55e"
                  size={18}
                  style={{ marginRight: 10 }}
                />
              }
              onPress={optionsHandler}
            >
              <Link to={{ screen: "updatepassword" }}>
                <Text>Đổi mật khẩu</Text>
              </Link>
            </Button>
            <Button
              bgColor="white"
              // leftIcon={<RiDownloadCloudFill color="#22c55e" />}
              leftIcon={
                <MaterialCommunityIcons
                  name="bookmark"
                  color="#22c55e"
                  size={18}
                  style={{ marginRight: 10 }}
                />
              }
              onPress={optionsHandler}
            >
              <Link to={{ screen: "album" }}>
                <Text>Lưu</Text>
              </Link>
            </Button>

            <UserSignOutButton navigation={navigation} />
          </VStack>
        </Box>
      )}
    </Box>
  );
}
export default UI;
