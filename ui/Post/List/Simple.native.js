import React from "react";
import { Button, VStack, Box, Text } from "native-base";
import PostItemSimple from "../Item/Simple";
import PostItemSkeletonSimple from "./SkeletonSimple";
import PostListController from "./Controller";
import PostCreateButton from "../Create/Button";
import {
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Text as RNText,
  RefreshControl,
} from "react-native";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function UI({
  loading,
  error,
  allPosts,
  count,
  loadMore,
  loadingMore,
  refetch,
}) {
  if (loading) {
    return <PostItemSkeletonSimple />;
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    refetch();
    wait(1000).then(() => setRefreshing(false));
  };

  return (
    <VStack mb="20px">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <PostCreateButton />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            {allPosts.map((post) => (
              <PostItemSimple
                isRefreshing={refreshing}
                key={post.id}
                existing={{ post }}
                refetchPostList={refetch}
              />
            ))}
            {loadingMore && <PostItemSkeletonSimple />}
            {count > allPosts.length && (
              <Box px="2">
                <Button
                  my={3}
                  bgColor="green.500"
                  rounded="8"
                  py="2"
                  px="4"
                  onPress={loadMore}
                >
                  <RNText
                    style={{
                      fontWeight: "500",
                      color: "white",
                      padding: 2,
                      fontFamily: "Lexend_500Medium",
                    }}
                  >
                    {loadingMore ? "Đang tải" : "Tải thêm bài viết"}
                  </RNText>
                </Button>
              </Box>
            )}
          </>
        </TouchableWithoutFeedback>
      </ScrollView>
    </VStack>
  );
}
export default function PostListSimple(props) {
  return <PostListController {...props} UI={UI} />;
}
