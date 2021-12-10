import React, { Fragment, useState } from "react";
import { Link } from "@react-navigation/native";
import {
  Keyboard,
  TouchableWithoutFeedback,
  Text as RNText,
} from "react-native";
import { Box, Text, VStack, FormControl, Input, Button } from "native-base";
function UI({ loading, error, user, navigation }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputError, setInputError] = useState(null);

  const submitChange = () => {
    Keyboard.dismiss();
    setInputError(null);

    // Validation password
    if (oldPassword.trim().length < 6) {
      setInputError("Kiểm tra lại mật khẩu cũ");
      return;
    }

    if (newPassword.trim().length < 6) {
      setInputError("Độ dài mật khẩu mới ít nhất 6 kí tự");
      return;
    }

    if (newPassword !== confirmPassword) {
      setInputError("Xác nhận mật khẩu không đúng");
      return;
    }

    console.log(oldPassword, newPassword, confirmPassword);

    // Save change
    // if (!loading);
  };

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box maxW="370px" w="full" mx="auto" mt="4">
          <Box my="20px">
            <RNText
              style={{
                fontWeight: "500",
                textAlign: "center",
                fontSize: 24,
                fontFamily: "Lexend_500Medium",
              }}
            >
              Đổi mật khẩu
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
              <FormControl>
                <FormControl.Label>Mật khẩu cũ</FormControl.Label>
                <Input
                  onChangeText={(text) => setOldPassword(text)}
                  value={oldPassword}
                  name="oldpassword"
                  type="password"
                  bgColor="white"
                  p="8px"
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
                <FormControl.Label>Mật khẩu mới</FormControl.Label>
                <Input
                  onChangeText={(text) => setNewPassword(text)}
                  value={newPassword}
                  name="newpassword"
                  type="password"
                  bgColor="white"
                  p="8px"
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
                <FormControl.Label>Xác nhận mật khẩu mới</FormControl.Label>
                <Input
                  onChangeText={(text) => setConfirmPassword(text)}
                  value={confirmPassword}
                  name="confirmpassword"
                  type="password"
                  bgColor="white"
                  p="8px"
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
          {error && (
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
      </TouchableWithoutFeedback>
    </Fragment>
  );
}
export default UI;
