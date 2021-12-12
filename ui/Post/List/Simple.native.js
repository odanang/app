import React from "react";
import { Button, VStack, Box } from "native-base";
import PostItemSimple from "../Item/Simple";
import PostItemSkeletonSimple from "./SkeletonSimple";
import PostListController from "./Controller";
import PostCreateButton from "../Create/Button";
import {
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Text as RNText,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function UI({
  loading,
  error,
  allPosts,
  count,
  loadMore,
  loadingMore,
  refetch,
}) {
  if (loading || error) {
    return <PostItemSkeletonSimple />;
  }

  return (
    <VStack mb="20px">
      <KeyboardAwareScrollView style={{ width: "100%" }} extraHeight={100}>
        <ScrollView>
          <PostCreateButton />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              {allPosts.map((post) => (
                <PostItemSimple key={post.id} existing={{ post, refetch }} />
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
      </KeyboardAwareScrollView>
    </VStack>
  );
}
export default function PostListSimple(props) {
  return <PostListController {...props} UI={UI} />;
}
