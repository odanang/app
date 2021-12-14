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
  const { loading, error, data = {}, refetch } = useQuery(POST_ITEM, {
    variables: { id },
  });
  // MUTATION
  const [
    onUpdate,
    { loadingUpdate, errorUpdate, dataUpdate = {} },
  ] = useMutation(POST_UPDATE);
  console.log(dataUpdate);
  const { Post = {} } = data;
  return (
    <UI
      loading={loading}
      error={error}
      post={Post}
      dataUpdate={dataUpdate}
      onUpdate={onUpdate}
    />
  );
}
