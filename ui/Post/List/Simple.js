import React from "react";
import { Button, VStack } from "native-base";
import PostItemSimple from "../Item/Simple";
import PostItemSkeletonSimple from "./SkeletonSimple";
import PostListController from "./Controller";
import { all } from "deepmerge";

function UI({
  loading,
  error,
  allPosts,
  count,
  loadMore,
  refetch,
}) {
  if (loading || error) {
    return <PostItemSkeletonSimple />;
  }

  return (
    <VStack px={["0", "1"]}>
      {/* Map list posts */}
      {allPosts.map((post) => (
        <PostItemSimple key={post.id} existing={{ post, refetch }} />
      ))}
      {count > allPosts.length && (
        <Button my={3} colorScheme="green" onPress={loadMore}>
          Tải thêm bài viết
        </Button>
      )}
    </VStack>
  );
}
export default function PostListSimple(props) {
  return <PostListController {...props} UI={UI} />;
}
