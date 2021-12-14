import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading' // upload image
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Button,
  TextArea,
} from 'native-base'
import {
  Keyboard,
  TouchableWithoutFeedback,
  Text as RNText,
} from 'react-native'
import Controller from './Controller'
import { useNavigation } from '@react-navigation/native'

function UI({ on, loading, error, post, updatePost }) {
  const [content, setContent] = useState(post?.content || '')
  const changeContent = (value) => {
    setContent(value)
  }

  const submitHandler = () => {
    if (!loading && content.trim()) {
      Keyboard.dismiss()
      on({
        variables: {
          id: post.id,
          data: { content: content },
        },
      })
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box maxW="380px" w="full" mx="auto" mt="4">
        <Box mb="20px">
          <RNText
            style={{
              fontWeight: '500',
              textAlign: 'center',
              fontSize: 24,
              fontFamily: 'Lexend_500Medium',
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
                  color: 'coolGray.800',
                  fontSize: '14',
                  fontWeight: 400,
                }}
              >
                Nội dung bài viết
              </FormControl.Label>
              <TextArea
                placeholder="Nhập nội dung ..."
                w="full"
                onChangeText={changeContent}
                name="content"
                bgColor="white"
                p={2}
                fontSize={14}
                borderWidth={1}
                borderColor="gray.100"
                rounded={6}
                _focus={{
                  borderColor: 'green.500',
                }}
              />
            </FormControl>
            {!loading && (
              <Button
                onPress={submitHandler}
                rounded={8}
                bgColor="green.500"
                p={2}
              >
                <RNText
                  style={{
                    fontWeight: '500',
                    color: 'white',
                    fontFamily: 'Lexend_500Medium',
                  }}
                >
                  ĐĂNG NGAY
                </RNText>
              </Button>
            )}
            {loading && (
              <Button rounded={8} bgColor="green.500" p={2}>
                <RNText
                  style={{
                    fontWeight: '500',
                    color: 'white',
                    fontFamily: 'Lexend_500Medium',
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
  )
}
export default function PostCreateSimple(props) {
  const navigation = useNavigation()
  return <Controller {...props} UI={UI} navigation={navigation} />
}
