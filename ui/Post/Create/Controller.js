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

export default function PostCreate({ UI, post }) {
  const postListRefetch = useReactiveVar(PostListRefetch);
  const [on, { loading, error, data = {} }] = useMutation(POST_CREATE, {
    onCompleted: (data) => {
      postListRefetch();
    },
  });
  if (loading) return "...";
  if (error) return error.message;
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
