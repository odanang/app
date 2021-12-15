import React, { Fragment, useState, useEffect } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  Text as RNText,
} from "react-native";
import UserSignIn from "./Controller";
import { Link } from "@react-navigation/native";
import {
  Box,
  Flex,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Image,
} from "native-base";

function UI({ signIn, loading, error, user, navigation }) {
  /**
   *
   * @param {Event} e
   */

  const [inputError, setInputError] = useState(null);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submitSignIn = () => {
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

    // Validation password
    if (password.trim().length < 8) {
      setInputError("Độ dài mật khẩu ít nhất 8 kí tự");
      return;
    }

    console.log("phone", phone);
    console.log("password", password);

    if (!loading) signIn({ phone, password });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setInputError(null);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Flex w="full" h="full" maxW="370px" mx="auto" mt={-10}>
          <Box my="auto">
            <Image
              source={{
                uri:
                  "https://odanang.net/upload/img/61b05922004a61dc3ce0cf18-favicon.png",
              }}
              alt="Odanang logo"
              size="80px"
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
                Đăng nhập để tiếp tục
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
                {!loading && (
                  <Button
                    onPress={submitSignIn}
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
                      ĐĂNG NHẬP
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
                <Text>Bạn chưa có tài khoản? </Text>
                <Link to={{ screen: "signup" }}>
                  <Text color="green.500" textDecoration="none">
                    Tạo tài khoản
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
                  Sai số điện thoại hoặc mật khẩu
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
        </Flex>
      </TouchableWithoutFeedback>
    </Fragment>
  );
}
export default function UserSignInSimple(props) {
  return <UserSignIn {...props} UI={UI} />;
}
