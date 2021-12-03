import React, { useMemo } from "react";
import { gql, useQuery, makeVar } from "@apollo/client";
export const COMMENT_LIST = gql`
  query(
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
    }
  }
`;
export const RefetchInteractiveCommentList = makeVar(() => {});

export function CommentListController({
  UI,
  first = 5,
  sortBy = "createdAt_DESC",
  skip,
  where,
  refetchInteractiveItem,
  ...props
}) {
  const { loading, error, data = {}, refetch } = useQuery(COMMENT_LIST, {
    variables: { first, skip, where, sortBy },
  });
  const { _allInteractiveCommentsMeta = {}, allInteractiveComments } = data;
  const { count } = _allInteractiveCommentsMeta;
  if (refetch) RefetchInteractiveCommentList(refetch);
  return useMemo(
    () => (
      <UI
        {...props}
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
