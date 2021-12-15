import React, { Fragment, useRef, useState } from "react";
import { Link } from "@react-navigation/native";
import {
  Box,
  Text,
  Heading,
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

  const usernameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const [sex, setSex] = useState("male");
  const [inputError, setInputError] = useState(null);

  const clickSignUp = () => {
    setInputError(null);
    const username = usernameRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;

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
      <Box maxW="370px" w="full" mx="auto" mt="100px">
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632635691/favicon_gc42jc.svg",
          }}
          alt="Odanang logo"
          size="70px"
          mx="auto"
        />
        <Heading my="20px" textAlign="center" fontSize={["20px", "24px"]}>
          Tạo tài khoản mới
        </Heading>
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
                ref={phoneRef}
                name="phone"
                bgColor="white"
                px="8px"
                py="6px"
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
                ref={usernameRef}
                name="username"
                bgColor="white"
                px="8px"
                py="6px"
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
                ref={passwordRef}
                name="password"
                type="password"
                bgColor="white"
                px="8px"
                py="6px"
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
                <HStack space="32px">
                  <Radio
                    colorScheme="green"
                    size="sm"
                    value="male"
                    borderWidth="1px"
                    borderColor="gray.300"
                  >
                    <Text fontSize="13px" ml="6px">
                      Nam
                    </Text>
                  </Radio>
                  <Radio
                    borderWidth="1px"
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
                    borderWidth="1px"
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
                p="8px"
                _text={{ color: "white", fontWeight: "600" }}
              >
                TẠO TÀI KHOẢN
              </Button>
            )}
            {loading && (
              <Button
                rounded="8px"
                bgColor="green.500"
                p="8px"
                _text={{ color: "white", fontWeight: "600" }}
              >
                ĐANG TẢI ...
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
    </Fragment>
  );
}
export default function UserSignUp(props) {
  return <Controller {...props} UI={UI} />;
}
