import React from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
import { INTERACTIVE_LIST } from "../List/Controller";
export const INTERACTIVE_ITEM = gql`
  query(
    $id: ID!
    $sortBy: [SortInteractiveCommentsBy!]
    $first: Int
    $where: InteractiveWhereInput
  ) {
    allInteractives(where: $where) {
      id
      comments(sortBy: $sortBy, first: $first) {
        id
        content
        createdAt
        createdBy {
          name
          avatar {
            publicUrl
          }
        }
        interactive {
          id
          _commentsMeta {
            count
          }
        }
      }
      reactions {
        id
        emoji
        createdBy {
          name
          avatar {
            publicUrl
          }
        }
      }
    }
  }
`;
export default function InteractiveItem({
  UI,
  id,
  where,
  sortBy,
  first = 3,
  skip,
}) {
  const { loading, error, data = {}, fetchMore, refetch } = useQuery(
    id ? INTERACTIVE_ITEM : INTERACTIVE_LIST,
    {
      variables: id ? { id, sortBy, first } : { where, sortBy, first, skip },
    }
  );
  const { allInteractives, Interactive } = data;
  const [interactive] = allInteractives || [Interactive];
  const lengthComment = interactive?.comments.length
    ? interactive.comments.length
    : 0;
  const count = interactive?._commentsMeta.count
    ? interactive._commentsMeta.count
    : 0;
  function getMore(e) {
    if (loading || error) return;
    if (count <= lengthComment) return;
    fetchMore({
      variables: { first: lengthComment + first },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          ...fetchMoreResult,
        };
      },
    });
  }
  return (
    <UI
      loading={loading}
      error={error}
      interactive={interactive}
      getMore={getMore}
      refetch={refetch}
      count={count}
    />
  );
}
