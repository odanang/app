import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { PostListRefetch } from "../List/Controller";
export const POST_CREATE = gql`
  mutation($data: PostCreateInput) {
    createPost(data: $data) {
      id
      content
      tags {
        content
      }
    }
  }
`;

export default function PostCreate({ UI, post, navigation, onCompleted = ()=>{} }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_CREATE, {
    onCompleted: (data) => {
			onCompleted(data);
      navigation.navigate("home");
    },
  });
  const { createPost } = data;
  return (
    <UI
      loading={loading}
      error={error}
      on={on}
      createPost={createPost}
      post={post}
    />
  );
}
