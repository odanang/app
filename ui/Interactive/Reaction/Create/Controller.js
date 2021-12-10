import React, { useContext } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { REACTION_DELETE } from "../Delete/Controller";
import { REACTION_LIST } from "../List/Controller";
import { AuthContext } from "../../../Provider/Native";
import { Text } from "native-base";
export const REACTION_CREATE = gql`
  mutation($data: InteractiveReactionCreateInput) {
    createInteractiveReaction(data: $data) {
      id
    }
  }
`;
export default function ReactionCreate({
  UI,
  interactive = {},
  onCompleted = () => {},
  onError = () => {},
}) {
  const { user } = useContext(AuthContext);
  if (!user) return <Text>Đang tải</Text>;
  // QUERY
  const { loading, error, data = {}, refetch } = useQuery(REACTION_LIST, {
    variables: {
      where: {
        createdBy: { id: user.id },
        interactive: { id: interactive.id },
      },
    },
  });
  const {
    _allInteractiveReactionsMeta = {},
    allInteractiveReactions = [],
  } = data;
  const reacted = _allInteractiveReactionsMeta.count || 0;

  // MUTATION
  const [onCreate, createResult] = useMutation(REACTION_CREATE, {
    onCompleted: (data) => {
      refetch();
      onCompleted(data);
    },
    onError: (e) => {
      refetch();
      onError(e);
    },
  });
  const [onDelete, deleteResult] = useMutation(REACTION_DELETE, {
    onCompleted: (data) => {
      refetch();
      onCompleted(data);
    },
    onError: (e) => {
      refetch();
      onError(e);
    },
  });
  function handleClick(e) {
    if (loading) return;
    if (reacted) {
      allInteractiveReactions.map((reaction) => {
        onDelete({ variables: { id: reaction.id } });
      });
    } else {
      if (interactive) {
        onCreate({
          variables: {
            data: {
              interactive: { connect: { id: interactive.id } },
              emoji: "like",
            },
          },
        });
      }
    }
  }

  return (
    <UI
      loading={loading}
      interactive={interactive}
      handleClick={handleClick}
      createResult={createResult}
      deleteResult={deleteResult}
      reacted={reacted}
    />
  );
}
