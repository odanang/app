import React from "react";
import { Button, VStack, Box } from "native-base";
import PostItemSimple from "../Item/Simple";
import PostItemSkeletonSimple from "./SkeletonSimple";
import PostListController from "./Controller";
import { ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function UI({ loading, error, allPosts, count, loadMore, refetch }) {
  if (loading || error) {
    return <PostItemSkeletonSimple />;
  }

  return (
    <VStack mb="20px">
      <KeyboardAwareScrollView style={{ width: "100%" }}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              {allPosts.map((post) => (
                <PostItemSimple key={post.id} existing={{ post, refetch }} />
              ))}
              {count > allPosts.length && (
                <Box px="2">
                  <Button
                    my={3}
                    bgColor="green.500"
                    _text={{
                      color: "white",
                      fontSize: ["13", "14"],
                      fontWeight: "600",
                    }}
                    rounded="8"
                    py="2"
                    px="4"
                    onPress={loadMore}
                  >
                    Tải thêm bài viết
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