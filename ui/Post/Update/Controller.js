import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { POST_ITEM } from "../Detail/Controller";

export const POST_UPDATE = gql`
  mutation($id: ID!, $data: PostUpdateInput) {
    updatePost(id: $id, data: $data) {
      id
      content
      tags {
        content
      }
    }
  }
`;

export default function PostUpdate({ UI, children, id }) {
  // QUERY
  const { loading, error, data = {} } = useQuery(POST_ITEM, {
    variables: { id },
  });
  // MUTATION
  const [onUpdate, updateResult] = useMutation(POST_UPDATE);
  const { Post = {} } = data;
  const { data: updatePost = {}, loading: loadingUpdate } = updateResult;
  return (
    <UI
      loading={loading}
      error={error}
      post={Post}
      dataUpdate={updatePost}
      loadingUpdate={loadingUpdate}
      onUpdate={onUpdate}
    />
  );
}
