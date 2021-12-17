import React, { useState, useContext, useRef, useEffect } from "react";
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

import { PostDeleteText, PostUpdateText } from "../index";
import { UploadImageListCarousel } from "../../Upload/Image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import PostItemSkeletonDetail from "./SkeletonDetail";
import InteractiveItemSimple from "../../Interactive/Item/Simple";
import PostDetail from "./Controller";
import { AuthContext } from "../../Provider/Native";
import { Link } from "@react-navigation/native";

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

function UI({ loading, error, post, refetch = () => {}, isOpen = true }) {
  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUser = useContext(AuthContext).user;
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

  if (loading) {
    return <PostItemSkeletonDetail />;
  }

  return (
    <Stack
      direction={[
        "column",
        "column",
        "column",
        `${!post?.images?.length ? "column" : "row"}`,
      ]}
      mx="auto"
      my="3"
      w={["100%", "90%", "80%", `${post?.images?.length ? "100%" : "75%"}`]}
      rounded={["0", "xl"]}
      borderWidth="1"
      borderColor="gray.100"
    >
      {post?.images?.length ? (
        <Box w={["100%", "100%", "100%", "60%"]}>
          <UploadImageListCarousel
            urls={post?.images?.map(
              (image) => "https://odanang.net" + image?.file?.publicUrl
            )}
          />
        </Box>
      ) : null}
      <VStack
        h="580px"
        overflow="auto"
        flex={1}
        maxW={[
          "100%",
          "100%",
          "100%",
          `${!post?.images?.length ? "100%" : "40%"}`,
        ]}
        py="3"
        px={["0", "0", "1"]}
      >
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
          <Link to={{ screen: "users", params: { id: post?.createdBy?.id } }}>
            <Text color="gray.900" fontWeight="600" fontSize="14">
              {post?.createdBy?.name}
            </Text>
          </Link>
          <Text color="gray.400" fontSize="12">
            {stringCreatedAt}
          </Text>
          {isModalOpen && post?.createdBy?.id === currentUser?.id && (
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
              <HiOutlineDotsHorizontal />
            </Button>
          )}
        </HStack>
        <Text px="3" my="2">
          {post?.content}
        </Text>
        <Box flex={1}>
          {/* INTERACTABLE GROUNP */}
          {post?.interactive && (
            <InteractiveItemSimple
              id={post?.interactive?.id}
              sortBy="createdAt_DESC"
            />
          )}
        </Box>
      </VStack>
    </Stack>
  );
}
export default function PostDetailSimple(props) {
  return <PostDetail {...props} UI={UI} />;
}
