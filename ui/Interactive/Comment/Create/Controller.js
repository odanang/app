import React from "react";
import { gql, useMutation } from "@apollo/client";

export const COMMENT_CREATE = gql`
  mutation($id: ID!, $data: InteractiveUpdateInput) {
    updateInteractive(id: $id, data: $data) {
      comments {
        content
      }
    }
  }
`;

export default function CommentCreate({ UI, interactive, refetch }) {
  const refectInteractiveItem = () => {
    refetch();
  };
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_CREATE, {
    onCompleted: (data) => {
      refectInteractiveItem();
    },
  });
  return (
    <UI loading={loading} error={error} on={on} interactive={interactive} />
  );
}
