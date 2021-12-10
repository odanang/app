import React, { useMemo } from "react";
import { gql, useQuery, makeVar } from "@apollo/client";
export const COMMENT_LIST = gql`
  query (
    $first: Int
    $skip: Int
    $where: InteractiveCommentWhereInput
    $sortBy: [SortInteractiveCommentsBy!]
  ) {
    _allInteractiveCommentsMeta(where: $where) {
      count
    }
    allInteractiveComments(
      first: $first
      skip: $skip
      where: $where
      sortBy: $sortBy
    ) {
      id
      content
      my_interactive{
        id
      }
    }
  }
`;

export default function CommentListController({
  UI,
  first = 5,
  sortBy = "createdAt_DESC",
  skip,
  where,
  refetchInteractiveItem,
  existing,
}) {
  if (existing)
    return <UI {...existing} />;
  const {
    loading,
    error,
    data = {},
    refetch,
  } = useQuery(COMMENT_LIST, {
    variables: { first, skip, where, sortBy },
  });
  const { _allInteractiveCommentsMeta = {}, allInteractiveComments } = data;
  const { count } = _allInteractiveCommentsMeta;
  return useMemo(
    () => (
      <UI
        loading={loading}
        error={error}
        allInteractiveComments={allInteractiveComments}
        count={count}
        refetchInteractiveItem={refetchInteractiveItem}
      />
    ),
    [loading, error, data]
  );
}
