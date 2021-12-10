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
import {
  InteractionCommentCreateSimple,
  InteractionCommentListSimple,
  InteractionCommentListToggleButton,
} from "../../Interactive/Comment";
import {
  InteractionReactionCreateButton,
  InteractionReactionListIconTextWithCount,
} from "../../Interactive/Reaction";
import { AlbumCreateButton } from "../../Album";
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

function UI({ loading, error, post, refetch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUser = useContext(AuthContext).user;
  const stringCreatedAt = formatTimeCreate(post?.createdAt);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };

  console.log(post);
  if (loading) {
    return <PostItemSkeletonDetail />;
  }
  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      mx="auto"
      my="3"
      w={["100%", "90%", "80%", "100%"]}
      rounded={["0", "xl"]}
      borderWidth="1"
      borderColor="gray.100"
    >
      <Box w={["100%", "100%", "100%", "60%"]}>
        <UploadImageListCarousel
          urls={post?.images?.map(
            (image) => "https://odanang.net" + image?.file?.publicUrl
          )}
        />
      </Box>
      <VStack
        maxW={["100%", "100%", "100%", "40%"]}
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
          {isModalOpen && (
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
              <PostUpdateText />
              <Divider w="full" bgColor="gray.100" />
              <PostDeleteText />
            </VStack>
          )}
          {isModalOpen && post?.createdBy?.id === currentUser.id && (
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
              <PostUpdateText />
              <Divider w="full" bgColor="gray.100" />
              <PostDeleteText id={post?.id} />
            </VStack>
          )}
          {post?.createdBy?.id === currentUser.id && (
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
          {post.content}
        </Text>
        <Box px="3" mt="2">
          <InteractionReactionListIconTextWithCount
            _allReactionsMeta={post?.interactive?._reactionsMeta}
          />
        </Box>
        <Box px="3">
          <HStack
            w="full"
            my="2"
            borderBottomWidth="1"
            borderBottomColor="gray.100"
            borderTopWidth="1"
            borderTopColor="gray.100"
            justifyContent="space-around"
          >
            <Box w="33%">
              <InteractionReactionCreateButton
                interactive={post.interactive}
                refetch={refetch}
                reactionsList={post?.interactive?.reactions}
              />
            </Box>
            <Box w="33%">
              <InteractionCommentListToggleButton />
            </Box>
            <Box w="33%">
              <AlbumCreateButton />
            </Box>
          </HStack>
          <InteractiveItemSimple
            where={{ id: post?.interactive?.id }}
            sortBy="createdAt_DESC"
          />
        </Box>
      </VStack>
    </Stack>
  );
}
export default function PostDetailSimple(props) {
  return <PostDetail {...props} UI={UI} />;
}
