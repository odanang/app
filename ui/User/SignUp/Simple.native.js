import React, { Fragment, useState } from "react";
import { Link } from "@react-navigation/native";
import {
  Keyboard,
  TouchableWithoutFeedback,
  Text as RNText,
} from "react-native";
import {
  Box,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Image,
  Radio,
} from "native-base";
import Controller from "../Create/Controller.js";

function UI({ loading, error, user, navigation, on }) {
  /**
   *
   * @param {Event} e
   */

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [sex, setSex] = useState("male");
  const [inputError, setInputError] = useState(null);

  const clickSignUp = () => {
    Keyboard.dismiss();
    setInputError(null);

    // Validation phone number
    if (
      !phone.trim() ||
      (!(phone.length === 10) && !(phone.length === 11)) ||
      isNaN(phone)
    ) {
      setInputError("Kiểm tra lại số điện thoại");
      return;
    }

    // Validation username
    if (!username.trim() || !isNaN(username) || !username.includes(" ")) {
      setInputError("Kiểm tra lại họ và tên");
      return;
    }

    // Validation password
    if (password.trim().length < 8) {
      setInputError("Độ dài mật khẩu ít nhất 8 kí tự");
      return;
    }
    console.log(username, phone, password, sex);

    // Sign up
    if (!loading) {
      on({ variables: { data: { name: username, phone, password } } });
    }
  };

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box maxW="370px" w="full" mx="auto" mt="80px">
          <Image
            source={{
              uri:
                "https://odanang.net/upload/img/61b05922004a61dc3ce0cf18-favicon.png",
            }}
            alt="Odanang logo"
            size="50px"
            mx="auto"
          />
          <Box my="20px">
            <RNText
              style={{
                fontWeight: "500",
                textAlign: "center",
                fontSize: 24,
                fontFamily: "Lexend_500Medium",
              }}
            >
              Tạo tài khoản mới
            </RNText>
          </Box>
          <Box
            px="18px"
            py="30px"
            rounded="10px"
            borderWidth="1px"
            borderColor="gray.100"
            bg="gray.50"
          >
            <VStack space="12px">
              <FormControl>
                <FormControl.Label>Số điện thoại</FormControl.Label>
                <Input
                  onChangeText={(text) => setPhone(text)}
                  value={phone}
                  name="phone"
                  keyboardType="numeric"
                  bgColor="white"
                  p="8px"
                  borderWidth="1"
                  borderColor="gray.100"
                  rounded="6px"
                  _focus={{
                    borderColor: "green.500",
                  }}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Họ và tên</FormControl.Label>
                <Input
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                  name="username"
                  bgColor="white"
                  p="8px"
                  borderWidth="1"
                  borderColor="gray.100"
                  rounded="6px"
                  _focus={{
                    borderColor: "green.500",
                  }}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Mật khẩu</FormControl.Label>
                <Input
                  onChangeText={(text) => setPassword(text)}
                  name="password"
                  type="password"
                  bgColor="white"
                  p="8px"
                  borderWidth="1"
                  borderColor="gray.100"
                  rounded="6px"
                  _focus={{
                    borderColor: "green.500",
                  }}
                />
              </FormControl>
              <FormControl mb="8px">
                <FormControl.Label>Giới tính</FormControl.Label>
                <Radio.Group
                  name="sex"
                  accessibilityLabel="sex"
                  value={sex}
                  onChange={(newValue) => {
                    setSex(newValue);
                  }}
                >
                  <HStack space="32px" mt="1">
                    <Radio
                      colorScheme="green"
                      size="sm"
                      value="male"
                      borderColor="gray.300"
                    >
                      <Text fontSize="13px" ml="6px">
                        Nam
                      </Text>
                    </Radio>
                    <Radio
                      borderColor="gray.300"
                      colorScheme="green"
                      size="sm"
                      value="female"
                    >
                      <Text fontSize="13px" ml="6px">
                        Nữ
                      </Text>
                    </Radio>
                    <Radio
                      borderColor="gray.300"
                      colorScheme="green"
                      size="sm"
                      value="other"
                    >
                      <Text fontSize="13px" ml="6px">
                        Khác
                      </Text>
                    </Radio>
                  </HStack>
                </Radio.Group>
              </FormControl>
              {!loading && (
                <Button
                  onPress={clickSignUp}
                  rounded="8px"
                  bgColor="green.500"
                  p="10px"
                >
                  <RNText
                    style={{
                      fontWeight: "600",
                      color: "white",
                      fontFamily: "Lexend_500Medium",
                    }}
                  >
                    TẠO TÀI KHOẢN
                  </RNText>
                </Button>
              )}
              {loading && (
                <Button rounded="8px" bgColor="green.500" p="10px">
                  <RNText
                    style={{
                      fontWeight: "600",
                      color: "white",
                      fontFamily: "Lexend_500Medium",
                    }}
                  >
                    ĐANG TẢI ...
                  </RNText>
                </Button>
              )}
            </VStack>
          </Box>
          <Box
            mt="12px"
            p="14px"
            rounded="10px"
            borderWidth="1"
            borderColor="gray.100"
          >
            <HStack justifyContent="center">
              <Text>Bạn đã có tài khoản? </Text>
              <Link to={{ screen: "home" }}>
                <Text color="green.500" textDecoration="none">
                  Đăng nhập ngay
                </Text>
              </Link>
            </HStack>
          </Box>
          {error && !inputError && (
            <Box
              mt="12px"
              p="14px"
              rounded="10px"
              borderWidth="1px"
              borderColor="red.500"
            >
              <Text textAlign="center" color="red.500">
                Vui lòng sử dụng số điện thoại khác
              </Text>
            </Box>
          )}
          {inputError && (
            <Box
              mt="12px"
              p="12px"
              rounded="10px"
              borderWidth="1px"
              borderColor="red.500"
            >
              <Text textAlign="center" color="red.500">
                {inputError}
              </Text>
            </Box>
          )}
        </Box>
      </TouchableWithoutFeedback>
    </Fragment>
  );
}
export default function UserSignUp(props) {
  return <Controller {...props} UI={UI} />;
}
