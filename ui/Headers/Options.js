import React, { useState, useContext } from "react";
import { Button, Box, VStack, Text } from "native-base";
import { Link } from "@react-navigation/native";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RiUser3Fill, RiDownloadCloudFill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { UserSignOutButton } from "../User";
import { AuthContext } from '../Provider/Native'
function UI({ navigation }) {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const optionsHandler = () => {
    setIsOpenOptions((prev) => !prev);
  };
  const currentUser = useContext(AuthContext).user
  return (
    <Box position="relative" right="0">
      <Button
        onPress={optionsHandler}
        rounded="100"
        bgColor="gray.100"
        p="10px"
        _text={{ color: "gray.400", fontWeight: "600" }}
      >
        <BsFillCaretDownFill color="#a1a1aa" />
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
            alignItems="start"
          >
            <Button
              bgColor="white"
              leftIcon={<RiUser3Fill color="#22c55e" />}
              onPress={optionsHandler}
            >
              <Link to={{ screen: "users", params: { id: currentUser.id } }}>
                <Text>Trang cá nhân</Text>
              </Link>
            </Button>
            <Button
              bgColor="white"
              leftIcon={<MdSettings color="#22c55e" />}
              onPress={optionsHandler}
            >
              <Link to={{ screen: "userupdate" }}>
                <Text>Cài đặt</Text>
              </Link>
            </Button>
            <Button
              bgColor="white"
              leftIcon={<HiLockClosed color="#22c55e" />}
              onPress={optionsHandler}
            >
              <Link to={{ screen: "updatepassword" }}>
                <Text>Đổi mật khẩu</Text>
              </Link>
            </Button>
            <Button
              bgColor="white"
              leftIcon={<RiDownloadCloudFill color="#22c55e" />}
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
