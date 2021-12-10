import React from "react";
import { gql, useQuery } from "@apollo/client";
export const REACTION_LIST = gql`
  query($where: InteractiveReactionWhereInput) {
    _allInteractiveReactionsMeta(where: $where) {
      count
    }
    allInteractiveReactions(where: $where) {
      id
      emoji
    }
  }
`;

export default function ReactionListController({ UI, where, existing }) {
  if (existing) return <UI {...existing} />
  const { loading, error, data = {}, refetch } = useQuery(REACTION_LIST, {
    variables: { where },
  });
  const { allInteractiveReactions = [], _allInteractiveReactionsMeta = {} } = data;
  const { count = 0 } = _allInteractiveReactionsMeta
  return (
    <UI
      loading={loading}
      error={error}
      allInteractiveReactions={allInteractiveReactions}
      count={count}
    />
  );
}
