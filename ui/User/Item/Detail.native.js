import React, { useContext } from "react";
import { Link } from "@react-navigation/native";
import { Box, HStack, Image, VStack, Text, Divider, Stack } from "native-base";
import { Text as RNText, ScrollView } from "react-native";
import { PostListGrid } from "../../Post";
import {
  RelationshipUpdateButton,
  RelationshipDeleteDelete,
  RelationshipCreateButton,
  RelationshipDeleteActive,
} from "../../Relationship";
import Controller from "./Controller";
import DetailSkeleton from "./DetailSkeleton";
import { AuthContext } from "../../Provider/Native";

function UI({ loading, error, user, posts, relationship, count }) {
  const currentUser = useContext(AuthContext).user;
  if (loading) return <DetailSkeleton />;

  return (
    <VStack maxw="full" w="full" h="full" mb="-20px">
      <ScrollView>
        <VStack maxw="full" mx="auto" my="3" w="full" space="2">
          <HStack space="7" m="1%" alignItems="center">
            <Box>
              <Image
                source={{
                  uri:
                    "https://odanang.net" +
                    (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
                }}
                alt={user?.name}
                w="100px"
                h="100px"
                rounded="100"
              />
            </Box>
            <VStack flex="1" space="2">
              <HStack space="3">
                <RNText
                  style={{
                    fontWeight: "500",
                    fontFamily: "Lexend_500Medium",
                    fontSize: 20,
                  }}
                >
                  {user?.name}
                </RNText>
              </HStack>
              <HStack space="4">
                <Text fontSize="14" color="gray.500">
                  <Text>{posts.length} bài đăng</Text>
                </Text>
                <Text fontSize="14" color="gray.500">
                  {count} bạn bè
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <VStack mx="1%">
            {user?.id !== currentUser?.id && (
              <Stack
                space="2"
                alignItems="flex-start"
                direction="column"
                my="4"
              >
                {relationship === null && (
                  <>
                    <Text
                      mb="3"
                      fontSize="15"
                      fontWeight="600"
                      color="gray.500"
                    >
                      Gửi lời mời kết bạn đến {user.name}
                    </Text>
                    <HStack space="2" w="120">
                      <RelationshipCreateButton toId={user?.id} />
                    </HStack>
                  </>
                )}
                {relationship?.isAccepted === true && (
                  <>
                    <Text
                      mb="3"
                      fontSize="15"
                      fontWeight="600"
                      color="gray.500"
                    >
                      Bạn và {user.name} đã là bạn bè
                    </Text>
                    <HStack space="2" w="120">
                      <RelationshipDeleteActive id={relationship?.id} />
                    </HStack>
                  </>
                )}
                {(relationship?.isAccepted === false ||
                  relationship?.isAccepted === null) &&
                  relationship?.createdBy?.id === currentUser?.id && (
                    <>
                      <Text
                        mb="3"
                        fontSize="15"
                        fontWeight="600"
                        color="gray.500"
                      >
                        Bạn đã gửi kết bạn đến {user.name}
                      </Text>
                      <HStack space="2" w="120">
                        <RelationshipDeleteDelete id={relationship?.id} />
                      </HStack>
                    </>
                  )}
                {(relationship?.isAccepted === false ||
                  relationship?.isAccepted === null) &&
                  relationship?.to?.id === currentUser?.id &&
                  relationship?.createdBy?.id === user?.id && (
                    <>
                      <Text
                        mb="3"
                        fontSize="15"
                        fontWeight="600"
                        color="gray.500"
                      >
                        {user.name} đã gửi lời mời kết bạn
                      </Text>
                      <HStack space="2">
                        <Box w="130px">
                          <RelationshipUpdateButton id={relationship?.id} />
                        </Box>
                        <Box w="130px">
                          <RelationshipDeleteDelete id={relationship?.id} />
                        </Box>
                      </HStack>
                    </>
                  )}
              </Stack>
            )}
          </VStack>

          <VStack space="1" m="1%" mb="3">
            <RNText
              style={{
                fontWeight: "500",
                fontFamily: "Lexend_500Medium",
                fontSize: 18,
              }}
            >
              Giới thiệu
            </RNText>
            <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
            <Text
              fontSize="14"
              fontWeight="400"
              color="gray.600"
              lineHeight="26px"
            >
              {user.description}
              {/* <Field>{user.description}</Field> */}
            </Text>
          </VStack>

          {user?.id === currentUser?.id && (
            <VStack space="1" m="1%" mb="4">
              <HStack justifyContent="space-between" alignItems="center">
                <RNText
                  style={{
                    fontWeight: "500",
                    fontFamily: "Lexend_500Medium",
                    fontSize: 18,
                  }}
                >
                  Bạn bè
                </RNText>
                <Link to={{ screen: "friends" }}>
                  <Text color="green.500" textDecoration="none">
                    Xem tất cả
                  </Text>
                </Link>
              </HStack>
              <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
            </VStack>
          )}

          <VStack w="98%" space="1" m="1%">
            <RNText
              style={{
                fontWeight: "500",
                fontFamily: "Lexend_500Medium",
                fontSize: 18,
              }}
            >
              Bài viết
            </RNText>
            <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
          </VStack>
          <PostListGrid />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
export { UI };
export default function UserItemDetail(props) {
  return <Controller {...props} UI={UI} />;
}
