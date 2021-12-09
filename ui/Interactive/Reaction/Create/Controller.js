import React from "react";
import { gql, useMutation } from "@apollo/client";
import { REACTION_DELETE } from "../Delete/Controller";

export const REACTION_CREATE_POST = gql`
  mutation ($id: ID!, $data: InteractiveUpdateInput) {
    updateInteractive(id: $id, data: $data) {
      reactions {
        emoji
      }
    }
  }
`;
export const REACTION_CREATE_COMMENT = gql`
  mutation ($id: ID!, $data: InteractiveUpdateInput) {
    updateInteractive(id: $id, data: $data) {
      id
      reactions {
        id
        emoji
      }
      _reactionsMeta {
        count
      }
    }
  }
`;
export const REACTION_CREATE = gql`
  mutation ($data: InteractiveReactionCreateInput) {
    createInteractiveReaction(data: $data) {
      id
    }
  }
`;
export default function ReactionCreate({
  UI,
  interactive = {},
	refetch = () => {},
  reactions,
  loading,
}) {
  const [reacted] = interactive.reacted || [];
  const [onCreate, createResult] = useMutation(REACTION_CREATE, {
    onCompleted: (data) => {
      console.log(data);
      refetch();
    },
    onError: (e) => {
      console.log(e);
    },
  });
  const [onDelete, deleteResult] = useMutation(REACTION_DELETE, {
    onCompleted: (data) => {
      refetch();
    },
  });
  function handleClick(e) {
    if (loading) return;
    if (reacted) {
      console.log("unlike", reacted);
      onDelete({ variables: { id: reacted.id } });
    } else {
      if (interactive) {
        console.log("like", interactive);
        onCreate({
          variables: {
            data: { interactive: { connect: { id: interactive.id } } },
          },
        });
      }
    }
  }

  return (
    <UI
      loading={loading}
      interactive={interactive}
      reacted={reacted}
      handleClick={handleClick}
      createResult={createResult}
      deleteResult={deleteResult}
      reactions={reactions}
    />
  );
}
