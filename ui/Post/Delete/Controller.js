import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { PostListRefetch } from "../List/Controller";

export const POST_DELETE = gql`
  mutation($id: ID!) {
    deletePost(id: $id) {
      id
      content
    }
  }
`;

export default function PostDelete({ UI, id }) {
  const postListRefetch = useReactiveVar(PostListRefetch);
  const [on, { loading, error, data = {} }] = useMutation(POST_DELETE, {
    onCompleted: (data) => {
      postListRefetch();
    },
  });
  const { deletePost } = data;
  const clickDetete = () => {
    on({ variables: { id: id } });
  };
  return (
    <UI
      loading={loading}
      error={error}
      clickDetete={clickDetete}
      post={deletePost}
    />
  );
}
