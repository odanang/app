import React, { useState, useContext, useRef, useEffect } from "react";
import { Text as RNText, Platform } from "react-native";
import { Box, HStack, Image, Text, Button, VStack, Divider } from "native-base";
import PostDeleteText from "../Delete/Text";
import PostUpdateText from "../Update/Text";
import { UploadImageListCarousel } from "../../Upload/Image";
import PostItem from "./Controller";
import Entypo from "react-native-vector-icons/Entypo";

Entypo.loadFont();

import InteractiveItemSimple from "../../Interactive/Item/Simple";
import { Link } from "@react-navigation/native";
import { AuthContext } from "../../Provider/Native";

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

export function UI({
  loading,
  error,
  post = {},
  refetch = () => {},
  refetchPostList,
}) {
  const ref = useRef();
  const currentUser = useContext(AuthContext).user;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stringCreatedAt = formatTimeCreate(post?.createdAt);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const hideModal = (e) => {
      if (isModalOpen && ref.current && !ref.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", hideModal);
    return () => {
      document.removeEventListener("mousedown", hideModal);
    };
  }, [isModalOpen]);

  if (loading) return <Text></Text>;

  return (
    <Box
      maxW={["100%", "container.md"]}
      my={2}
      py={4}
      rounded={["0", "xl"]}
      borderWidth="1"
      borderColor="gray.100"
    >
      <HStack
        space="3"
        display="flex"
        flexDirection="row"
        px="3"
        alignItems="center"
        position="relative"
        zIndex="1"
      >
        <Link to={{ screen: "users", params: { id: post?.createdBy?.id } }}>
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
        </Link>
        <Link to={{ screen: "users", params: { id: post?.createdBy?.id } }}>
          {Platform.OS !== "web" ? (
            <RNText
              style={{
                fontWeight: "500",
                fontFamily: "Lexend_500Medium",
              }}
            >
              {post?.createdBy?.name}
            </RNText>
          ) : (
            <Text color="gray.900" fontWeight="600" fontSize="14">
              {post?.createdBy?.name}
            </Text>
          )}
        </Link>
        <Text color="gray.400" fontSize="12">
          {stringCreatedAt}
        </Text>
        {isModalOpen && post.createdBy.id === currentUser?.id && (
          <VStack
            ref={ref}
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
            {post && (
              <PostDeleteText id={post?.id} refetchPostList={refetchPostList} />
            )}
          </VStack>
        )}
        {post.createdBy && post.createdBy.id === currentUser?.id && (
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
      <UploadImageListCarousel
        urls={post?.images?.map(
          (image) => "https://odanang.net" + image?.file?.publicUrl
        )}
      />

      <InteractiveItemSimple id={post?.interactive.id} />
    </Box>
  );
}
export default function PostItemSimple(props) {
  return <PostItem {...props} UI={UI} />;
}
