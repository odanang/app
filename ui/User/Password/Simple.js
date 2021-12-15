import React, { Fragment, useRef, useState } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";
import Controller from "./Controller";
function UI({ loading, error, user, navigation, on, updateUser }) {
  const passwordNewRef = useRef();
  const passwordConfirmRef = useRef();
  const [inputError, setInputError] = useState(null);

  const submitChange = () => {
    setInputError(null);
    const passwordNew = passwordNewRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    // Validation password
    if (passwordNew.trim().length < 8) {
      setInputError("Độ dài mật khẩu mới ít nhất 8 kí tự");
      return;
    }

    if (passwordNew !== passwordConfirm) {
      setInputError("Xác nhận mật khẩu không đúng");
      return;
    }

    on({
      variables: {
        id: user?.id,
        data: {
          password: passwordConfirm,
        },
      },
    });
  };

  return (
    <Fragment>
      <Box maxW="350" w="full" mx="auto" mt="4">
        <Heading my="20px" textAlign="center" fontSize={["18px", "20px"]}>
          Đổi mật khẩu
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
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "14",
                  fontWeight: 400,
                }}
              >
                Mật khẩu mới
              </FormControl.Label>
              <Input
                ref={passwordNewRef}
                name="newpassword"
                type="password"
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
                  color: "coolGray.800",
                  fontSize: "14",
                  fontWeight: 400,
                }}
              >
                Xác nhận mật khẩu mới
              </FormControl.Label>
              <Input
                ref={passwordConfirmRef}
                name="confirmpassword"
                type="password"
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
            {!loading && (
              <Button
                onPress={submitChange}
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
            mt={4}
            p={3.5}
            rounded={10}
            borderWidth={1}
            borderColor="green.500"
          >
            <Text textAlign="center" color="green.500">
              Đổi mật khẩu thành công
            </Text>
          </Box>
        )}
        {error && !inputError && (
          <Box
            mt={4}
            p={3.5}
            rounded={10}
            borderWidth={1}
            borderColor="red.500"
          >
            <Text textAlign="center" color="red.500">
              Vui lòng kiểm tra lại mật khẩu cũ
            </Text>
          </Box>
        )}
        {inputError && (
          <Box
            mt={4}
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
export default function ChangePassword(props) {
  return <Controller {...props} UI={UI} />;
}
