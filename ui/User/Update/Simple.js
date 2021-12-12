import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "@react-navigation/native";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  TextArea,
  Button,
  HStack,
  Image,
  Radio,
  Input,
} from "native-base";
import { AuthContext } from "../../Provider/Native";
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
  const { updateUser } = data;

  const submitUpdate = () => {
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
    console.log(on);
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
  };

  return (
    <Fragment>
      <Box maxW="400" w="full" mx="auto" mt="4">
        <Heading my="20px" textAlign="center" fontSize={["18px", "20px"]}>
          Chỉnh sửa trang cá nhân
        </Heading>
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
                    (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
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
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="username"
                bgColor="white"
                px={2}
                py={1.5}
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
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name="phone"
                bgColor="white"
                px={2}
                py={1.5}
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
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name="description"
                bgColor="white"
                px={2}
                py={1.5}
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
                    borderWidth="1"
                    borderColor="gray.300"
                  >
                    <Text fontSize="13" ml="1.5">
                      Nam
                    </Text>
                  </Radio>
                  <Radio
                    borderWidth="1"
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
                    borderWidth="1"
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
                onPress={submitUpdate}
                rounded={8}
                bgColor="green.500"
                p={2}
                _text={{ color: "white", fontWeight: "600" }}
              >
                LƯU THAY ĐỔI
              </Button>
            )}
            {loading && (
              <Button
                rounded={8}
                bgColor="green.500"
                p={2}
                _text={{ color: "white", fontWeight: "600" }}
              >
                ĐANG TẢI ...
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
        {error && (
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
    </Fragment>
  );
}
//export default UI;
export default function PostCreateSimple(props) {
  return <Controller {...props} UI={UI} />;
}
