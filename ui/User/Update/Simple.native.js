import React, { Fragment, useState } from "react";
import { Link } from "@react-navigation/native";
import {
  Keyboard,
  TouchableWithoutFeedback,
  Text as RNText,
  ScrollView,
} from "react-native";
import {
  Box,
  Text,
  VStack,
  FormControl,
  TextArea,
  Button,
  HStack,
  Image,
  Radio,
  Input,
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Controller from "./Controller";
function UI({ loading, error, user, on, data }) {
  /**
   *
   * @param {Event} e
   */
  const [username, setUsername] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [description, setDescription] = useState(user?.description);
  const [sex, setSex] = useState("male");
  const [inputError, setInputError] = useState(null);
  const updateUser = data?.updateUser;

  const submitChange = () => {
    Keyboard.dismiss();
    setInputError(null);

    // Validation username
    if (!username.trim() || !isNaN(username) || !username.includes(" ")) {
      setInputError("Kiểm tra lại họ và tên");
      return;
    }

    // Validation phone number
    if (
      !phone.trim() ||
      (!(phone.length === 10) && !(phone.length === 11)) ||
      isNaN(phone)
    ) {
      setInputError("Kiểm tra lại số điện thoại");
      return;
    }

    console.log(username, phone, description, sex);
    on({
      variables: {
        id: user?.id,
        data: {
          name: username,
          phone: phone,
          description: description,
          gender: sex,
        },
      },
    });

    // Save change
    // if (!loading);
  };

  return (
    <Fragment>
      <KeyboardAwareScrollView style={{ width: "100%" }}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Box maxW="370px" w="full" mx="auto" mt="4">
              <Box mb="20px">
                <RNText
                  style={{
                    fontWeight: "500",
                    textAlign: "center",
                    fontSize: 24,
                    fontFamily: "Lexend_500Medium",
                  }}
                >
                  Chỉnh sửa trang cá nhân
                </RNText>
              </Box>
              <Box
                px={5}
                py={7}
                rounded={10}
                borderWidth={1}
                borderColor="gray.100"
                bg="gray.50"
              >
                <VStack space={3}>
                  <VStack space="4" mb="3">
                    <Image
                      source={{
                        uri:
                          "https://odanang.net" +
                          (user?.avatar?.publicUrl ||
                            "/upload/img/no-image.png"),
                      }}
                      alt="Alternate Text"
                      size="lg"
                      mx="auto"
                      rounded="100"
                    />
                    <Button
                      _text={{
                        color: "gray.400",
                        fontSize: "14",
                        fontWeight: "600",
                      }}
                      p="2"
                      rounded="8"
                      w="50%"
                      bgColor="gray.100"
                      mx="auto"
                    >
                      Thay đổi ảnh đại diện
                    </Button>
                  </VStack>
                  <FormControl>
                    <FormControl.Label
                      _text={{
                        color: "gray.800",
                        fontSize: "14",
                        fontWeight: 400,
                      }}
                    >
                      Họ và tên
                    </FormControl.Label>
                    <Input
                      onChangeText={(value) => setUsername(value)}
                      value={username}
                      name="username"
                      bgColor="white"
                      p="2"
                      fontSize={14}
                      borderWidth={1}
                      borderColor="gray.100"
                      rounded={6}
                      _focus={{
                        borderColor: "green.500",
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label
                      _text={{
                        color: "gray.800",
                        fontSize: "14",
                        fontWeight: 400,
                      }}
                    >
                      Số điện thoại
                    </FormControl.Label>
                    <Input
                      onChangeText={(value) => setPhone(value)}
                      value={phone}
                      keyboardType="numeric"
                      name="phone"
                      bgColor="white"
                      p="2"
                      fontSize={14}
                      borderWidth={1}
                      borderColor="gray.100"
                      rounded={6}
                      _focus={{
                        borderColor: "green.500",
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label
                      _text={{
                        color: "gray.800",
                        fontSize: "14",
                        fontWeight: 400,
                      }}
                    >
                      Giới thiệu
                    </FormControl.Label>
                    <TextArea
                      onChangeText={(value) => setDescription(value)}
                      value={description}
                      name="description"
                      bgColor="white"
                      p="2"
                      fontSize={14}
                      borderWidth={1}
                      borderColor="gray.100"
                      rounded={6}
                      _focus={{
                        borderColor: "green.500",
                      }}
                    />
                  </FormControl>
                  <FormControl mb="2">
                    <FormControl.Label
                      _text={{
                        color: "gray.800",
                        fontSize: "14",
                        fontWeight: 400,
                      }}
                    >
                      Giới tính
                    </FormControl.Label>
                    <Radio.Group
                      name="sex"
                      accessibilityLabel="sex"
                      value={sex}
                      onChange={(newValue) => {
                        setSex(newValue);
                      }}
                    >
                      <HStack space="8">
                        <Radio
                          colorScheme="green"
                          size="sm"
                          value="male"
                          borderColor="gray.300"
                        >
                          <Text fontSize="13" ml="1.5">
                            Nam
                          </Text>
                        </Radio>
                        <Radio
                          borderColor="gray.300"
                          colorScheme="green"
                          size="sm"
                          value="female"
                        >
                          <Text fontSize="13" ml="1.5">
                            Nữ
                          </Text>
                        </Radio>
                        <Radio
                          borderColor="gray.300"
                          colorScheme="green"
                          size="sm"
                          value="other"
                        >
                          <Text fontSize="13" ml="1.5">
                            Khác
                          </Text>
                        </Radio>
                      </HStack>
                    </Radio.Group>
                  </FormControl>
                  {!loading && (
                    <Button
                      onPress={submitChange}
                      rounded={8}
                      bgColor="green.500"
                      p="10px"
                    >
                      <RNText
                        style={{
                          fontWeight: "500",
                          color: "white",
                          fontFamily: "Lexend_500Medium",
                        }}
                      >
                        LƯU THAY ĐỔI
                      </RNText>
                    </Button>
                  )}
                  {loading && (
                    <Button rounded="8px" bgColor="green.500" p="10px">
                      <RNText
                        style={{
                          fontWeight: "500",
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
              {updateUser && !error && !inputError && (
                <Box
                  my={4}
                  p={3.5}
                  rounded={10}
                  borderWidth={1}
                  borderColor="green.500"
                >
                  <Text textAlign="center" color="green.500">
                    Lưu thông tin thành công
                  </Text>
                </Box>
              )}
              {error && !inputError && (
                <Box
                  my={4}
                  p={3.5}
                  rounded={10}
                  borderWidth={1}
                  borderColor="red.500"
                >
                  <Text textAlign="center" color="red.500">
                    Vui lòng sử dụng số điện thoại khác
                  </Text>
                </Box>
              )}
              {inputError && (
                <Box
                  my={4}
                  p={3.5}
                  rounded={10}
                  borderWidth={1}
                  borderColor="red.500"
                >
                  <Text textAlign="center" color="red.500">
                    {inputError}
                  </Text>
                </Box>
              )}
            </Box>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
//export default UI;
export default function PostCreateSimple(props) {
  return <Controller {...props} UI={UI} />;
}
