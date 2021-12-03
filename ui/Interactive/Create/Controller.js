import React from "react";
import { gql, useMutation, useReactiveVar, ReactiveVar } from "@apollo/client";
import { RefetchInteractiveList } from "../List/Controller";
import { RefetchInteractiveItem } from "../../Item/Controller";

export const COMMENT_CREATE = gql`
  mutation($data: InteractiveCreateInput) {
    createInteractive(data: $data) {
      id
      content
    }
  }
`;

export default function InteractiveCreate({ UI, interactive }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_CREATE, {
    onCompleted: (data) => {
      /**
       * useReactiveVar return refetchInteractiveList is a state
       * then, it make re-render this component
       */
      // const refetchInteractiveItem = RefetchInteractiveItem();
      // refetchInteractiveItem();
    },
  });
  const { createInteractive } = data;
  return (
    <UI
      loading={loading}
      error={error}
      on={on}
      createInteractive={createInteractive}
      interactive={interactive}
    />
  );
}
