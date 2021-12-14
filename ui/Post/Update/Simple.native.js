import React, { useState, useContext } from "react";
import ImageUploading from "react-images-uploading"; // upload image
import { Box, Text, VStack, FormControl, Button, TextArea } from "native-base";
import {
  Keyboard,
  TouchableWithoutFeedback,
  Text as RNText,
} from "react-native";
import Controller from "./Controller";
import { useRoute } from "@react-navigation/core";
import LoadingSpinner from "../../Loading/LoadingSpinner";

function UI({ onUpdate, loading, error, post, dataUpdate, loadingUpdate }) {
  if (loading) {
    return <LoadingSpinner />;
  }

  const [content, setContent] = useState(post.content);
  const changeContent = (value) => {
    setContent(value);
  };

  const { updatePost } = dataUpdate;
  const handleUpdate = () => {
    if (!loading && !loadingUpdate && content.trim()) {
      Keyboard.dismiss();
      onUpdate({
        variables: {
          id: post.id,
          data: { content: content },
        },
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box maxW="380px" w="full" mx="auto" mt="4">
        <Box mb="20px">
          <RNText
            style={{
              fontWeight: "500",
              textAlign: "center",
              fontSize: 24,
              fontFamily: "Lexend_500Medium",
            }}
          >
            Chỉnh sửa bài viết
          </RNText>
        </Box>
        <Box
          px={4}
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
                Nội dung bài viết
              </FormControl.Label>
              <TextArea
                placeholder="Nhập nội dung ..."
                w="full"
                value={content}
                onChangeText={changeContent}
                name="content"
                bgColor="white"
                p={2}
                fontSize={14}
                borderWidth={1}
                borderColor="gray.100"
                rounded={6}
                _focus={{
                  borderColor: "green.500",
                }}
              />
            </FormControl>
            {!loadingUpdate && (
              <Button
                onPress={handleUpdate}
                rounded={8}
                bgColor="green.500"
                p={2}
              >
                <RNText
                  style={{
                    fontWeight: "500",
                    color: "white",
                    fontFamily: "Lexend_500Medium",
                  }}
                >
                  ĐĂNG NGAY
                </RNText>
              </Button>
            )}
            {loadingUpdate && (
              <Button rounded={8} bgColor="green.500" p={2}>
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
        {updatePost && !error && (
          <Box
            mt={4}
            p={3.5}
            rounded={10}
            borderWidth={1}
            borderColor="green.500"
          >
            <Text textAlign="center" color="green.500">
              Chỉnh sửa bài viết thành công!
            </Text>
          </Box>
        )}
        {error && (
          <Box
            mt={4}
            p={3.5}
            rounded={10}
            borderWidth={1}
            borderColor="red.500"
          >
            <Text textAlign="center" color="red.500">
              Đăng bài viết không thành công!
            </Text>
          </Box>
        )}
      </Box>
    </TouchableWithoutFeedback>
  );
}
export default function PostCreateSimple(props) {
  const { params = {} } = useRoute();
  const { id } = params;
  return <Controller {...props} UI={UI} id={id} />;
}
