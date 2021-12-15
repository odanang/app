import React, { useState, useContext } from "react";
import {
  Box,
  Stack,
  HStack,
  Image,
  Text,
  Button,
  VStack,
  Divider,
} from "native-base";
import PostDeleteText from "../Delete/Text";
import PostUpdateText from "../Update/Text";
import { UploadImageListCarousel } from "../../Upload/Image";
import InteractiveItemSimple from "../../Interactive/Item/Simple";
import PostDetail from "./Controller";
import { AuthContext } from "../../Provider/Native";
import { Link } from "@react-navigation/native";
import {
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Text as RNText,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

Entypo.loadFont();

function formatTimeCreate(createdAt) {
  var dayjs = require("dayjs");
  let stringTime = "";
  const createdTime = dayjs(createdAt);
  const now = dayjs();
  if (now.format("DD-MM-YYYY") === createdTime.format("DD-MM-YYYY")) {
    if (Number(now.get("hour")) - Number(createdTime.get("hour")) === 0)
      stringTime =
        Number(now.get("minute")) -
        Number(createdTime.get("minute")) +
        " phút trước";
    else
      stringTime =
        Number(now.get("hour")) -
        Number(createdTime.get("hour")) +
        " giờ trước";
  } else stringTime = createdTime.format("DD-MM-YYYY");
  return stringTime;
}

function UI({ loading, error, post, refetch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUser = useContext(AuthContext).user;
  const stringCreatedAt = formatTimeCreate(post?.createdAt);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };

  if (loading) {
    return <Text></Text>;
  }

  return (
    <Stack direction="column" mx="auto" w="full">
      <KeyboardAwareScrollView style={{ width: "100%" }} extraHeight={100}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <Box w="full">
                <UploadImageListCarousel
                  urls={post?.images?.map(
                    (image) => "https://odanang.net" + image?.file?.publicUrl
                  )}
                />
              </Box>
              <VStack maxW="full" py="3">
                <HStack
                  space="3"
                  display="flex"
                  flexDirection="row"
                  w="full"
                  px="3"
                  alignItems="center"
                  position="relative"
                  zIndex="1"
                >
                  <Image
                    source={{
                      uri:
                        "https://odanang.net" +
                        (post?.createdBy?.avatar?.publicUrl ||
                          "/upload/img/no-image.png"),
                    }}
                    alt="Profile image"
                    size="8"
                    rounded="100"
                  />
                  <Link
                    to={{
                      screen: "users",
                      params: { id: post?.createdBy?.id },
                    }}
                  >
                    <RNText
                      style={{
                        fontWeight: "500",
                        color: "#18181b",
                        fontFamily: "Lexend_500Medium",
                      }}
                    >
                      {post?.createdBy?.name}
                    </RNText>
                  </Link>
                  <Text color="gray.400" fontSize="12">
                    {stringCreatedAt}
                  </Text>
                  {isModalOpen && post?.createdBy?.id === currentUser?.id && (
                    <VStack
                      position="absolute"
                      right="3"
                      top="8"
                      borderColor="gray.100"
                      borderWidth="1"
                      bgColor="white"
                      rounded="10"
                      space="1"
                      p="2"
                    >
                      <PostUpdateText id={post?.id} />
                      <Divider w="full" bgColor="gray.100" />
                      <PostDeleteText id={post?.id} page="detailPost" />
                    </VStack>
                  )}
                  {post?.createdBy?.id === currentUser?.id && (
                    <Button
                      bgColor="transparent"
                      p="1"
                      color="gray.500"
                      ml="auto"
                      onPress={toggleModal}
                    >
                      <Entypo
                        name="dots-three-horizontal"
                        color="#a1a1aa"
                        size={18}
                        style={{ marginTop: -2 }}
                      />
                    </Button>
                  )}
                </HStack>
                <Text px="3" my="2">
                  {post.content}
                </Text>
                <Box>
                  {/* INTERACTABLE GROUNP */}
                  {post?.interactive && (
                    <InteractiveItemSimple
                      id={post?.interactive?.id}
                      sortBy="createdAt_DESC"
                    />
                  )}
                </Box>
              </VStack>
            </>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAwareScrollView>
    </Stack>
  );
}
export default function PostDetailSimple(props) {
  return <PostDetail {...props} UI={UI} />;
}
