import React from "react";
import { HStack, Box, Text } from "native-base";
import PostItemImageOnly from "../Item/ImageOnly";
import PostItemSkeletonGrid from "./SkeletonGrid";
import Controller from "../../Post/Grid/Controller";
import { useRoute } from "@react-navigation/core";
import { Link } from "@react-navigation/native";

function UI({ error, loading, posts }) {
  if (loading) return <PostItemSkeletonGrid />;

  return (
    <HStack maxw="full" w="full" flexWrap="wrap" justifyContent="flex-start">
      {posts.map((item) => (
        <Box
          key={item.id}
          minW={["49%", "32%", "24%"]}
          m="0.5%"
          borderWidth="1"
          borderColor="gray.100"
          rounded="10"
          overflow="hidden"
        >
          <PostItemImageOnly key={item.id} item={item} />
        </Box>
      ))}
    </HStack>
  );
}
export { UI };
export default function UserPosts(props) {
  const { params = {} } = useRoute();
  const { id } = params;
  return <Controller {...props} UI={UI} id={id} />;
}
