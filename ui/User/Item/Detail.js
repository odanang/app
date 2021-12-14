import React, { useContext } from "react";
import { Link } from "@react-navigation/native";
import {
  Box,
  Button,
  HStack,
  Image,
  VStack,
  Text,
  Divider,
  Stack,
} from "native-base";
import { PostListGrid } from "../../Post";
import {
  RelationshipUpdateButton,
  RelationshipDeleteDelete,
  RelationshipCreateButton,
  RelationshipDeleteActive,
} from "../../Relationship";
import Controller from "./Controller";
import DetailSkeleton from "./DetailSkeleton";
import Field from "../../Field";
import { AuthContext } from "../../Provider/Native";
function UI({ loading, error, user, posts, relationship, count, navigation }) {
  const currentUser = useContext(AuthContext).user;
  if (loading) return <DetailSkeleton />;

  return (
    <VStack maxw="full" mx="auto" my="5" w="full" space="4">
      <HStack space="7" m="1%" alignItems="center">
        <Box>
          <Image
            source={{
              uri:
                "https://odanang.net" +
                (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
            }}
            alt="Alternate Text"
            w={["100px", "120px"]}
            h={["100px", "120px"]}
            rounded="100"
          />
        </Box>
        <VStack flex="1" space={["2", "3"]}>
          <HStack space="2">
            <Text fontSize={["20", "22"]} fontWeight="600">
              {user?.name}
            </Text>
          </HStack>
          <HStack space="4">
            <Text fontSize="14" color="gray.500">
              <Text>{posts?.length} bài đăng</Text>
            </Text>
            <Text fontSize="14" color="gray.500">
              {count} bạn bè
            </Text>
          </HStack>
        </VStack>
      </HStack>
      {user?.id !== currentUser?.id && (
        <VStack space="2" mx="1%" my={["1", "0"]}>
          <Stack
            space="2"
            alignItems={["start", "center"]}
            direction={["column", "row"]}
          >
            {relationship === null && (
              <>
                <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
                  Gửi lời mời kết bạn đến {user?.name}
                </Text>
                <HStack space="2" w="120">
                  <RelationshipCreateButton toId={user?.id} />
                </HStack>
              </>
            )}
            {relationship?.isAccepted === true && (
              <>
                <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
                  Bạn và {user?.name} đã là bạn bè
                </Text>
                <HStack space="2">
                  <RelationshipDeleteActive id={relationship?.id} />
                </HStack>
              </>
            )}
            {(relationship?.isAccepted === false ||
              relationship?.isAccepted === null) &&
              relationship?.createdBy?.id === currentUser?.id && (
                <>
                  <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
                    Bạn đã gửi kết bạn đến {user?.name}
                  </Text>
                  <HStack space="2">
                    <RelationshipDeleteDelete id={relationship?.id} />
                  </HStack>
                </>
              )}
            {(relationship?.isAccepted === false ||
              relationship?.isAccepted === null) &&
              relationship?.to?.id === currentUser?.id &&
              relationship?.createdBy?.id === user?.id && (
                <>
                  <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
                    {user?.name} đã gửi lời mời kết bạn
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
        </VStack>
      )}
      <VStack space="2" m="1%" mb="-1">
        <Text fontSize="18" fontWeight="600" color="gray.700">
          Giới thiệu
        </Text>
        <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
        <Text fontSize="14" fontWeight="400" color="gray.600" lineHeight="26px">
          <Field>{user?.description}</Field>
        </Text>
      </VStack>
      {user?.id === currentUser?.id && (
        <VStack space="2" m="1%">
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="18" fontWeight="600" color="gray.700">
              Bạn bè
            </Text>
            <Link to={{ screen: "friends" }}>
              <Text color="green.500" textDecoration="none">
                Xem tất cả
              </Text>
            </Link>
          </HStack>
          <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
        </VStack>
      )}
      <Box>
        <VStack w="98%" space="2" m="1%">
          <Text fontSize="18" fontWeight="600" color="gray.700">
            Bài viết
          </Text>
          <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
        </VStack>
        <PostListGrid navigation={navigation} />
      </Box>
    </VStack>
  );
}
//export { UI };
export default function UserItemDetail(props) {
  return <Controller {...props} UI={UI} />;
}
