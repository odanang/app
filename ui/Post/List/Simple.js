import React from "react";
import { Button, VStack } from "native-base";
import PostItemSimple from "../Item/Simple";
import PostItemSkeletonSimple from "./SkeletonSimple";
import PostListController from "./Controller";

function UI({ loading, error, allPosts, count, loadMore, refetch }) {
  if (loading || error) {
    return <PostItemSkeletonSimple />;
  }

  return (
    <VStack px={["0", "1"]}>
      {allPosts.map((post) => (
        <PostItemSimple key={post.id} existing={{ post, refetch }} />
      ))}
      {count > allPosts.length && (
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
      )}
    </VStack>
  );
}
export default function PostListSimple(props) {
  return <PostListController {...props} UI={UI} />;
}
