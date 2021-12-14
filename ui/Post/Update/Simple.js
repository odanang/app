import React, { useState, useContext } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Button,
  TextArea,
  Text,
} from "native-base";
import Controller from "./Controller";
import { AuthContext } from "../../Provider/Native";
import { useRoute } from "@react-navigation/core";
import LoadingSpinner from "../../Loading/LoadingSpinner";

function UI({ onUpdate, loading, error, post, dataUpdate, loadingUpdate }) {
  if (loading) {
    return <LoadingSpinner />;
  }

  const { user } = useContext(AuthContext);
  const [content, setContent] = useState(post.content);
  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const { updatePost } = dataUpdate;
  const handleUpdate = () => {
    if (!loading && !loadingUpdate && content.trim()) {
      onUpdate({
        variables: {
          id: post.id,
          data: { content: content },
        },
      });
    }
  };

  if (user?.id !== post?.createdBy?.id) {
    return (
      <Box maxW="560" mx="auto" w="full" p="2">
        <Heading my="20px" textAlign="center" fontSize={["18px", "20px"]}>
          Bạn không thể chỉnh sửa bài viết này
        </Heading>
      </Box>
    );
  }

  return (
    <Box maxW="560" mx="auto" w="full" p="2">
      <Heading my="20px" textAlign="center" fontSize={["18px", "20px"]}>
        Chỉnh sửa bài viết
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
              Nội dung bài viết
            </FormControl.Label>
            <TextArea
              placeholder="Nhập nội dung ..."
              w="full"
              value={content}
              onChange={changeContent}
              name="content"
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
          {!loadingUpdate && (
            <Button
              onPress={handleUpdate}
              rounded={8}
              bgColor="green.500"
              p={2}
              _text={{ color: "white", fontWeight: "600" }}
            >
              ĐĂNG NGAY
            </Button>
          )}
          {loadingUpdate && (
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
        <Box mt={4} p={3.5} rounded={10} borderWidth={1} borderColor="red.500">
          <Text textAlign="center" color="red.500">
            Chỉnh sửa bài viết không thành công!
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default function PostUpdateSimple(props) {
  const { params = {} } = useRoute();
  const { id } = params;
  return <Controller {...props} UI={UI} id={id} />;
}
