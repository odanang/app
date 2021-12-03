import React from "react";
import { gql, useQuery } from "@apollo/client";
export const INTERACTIVE_LIST = gql`
  query(
    $first: Int
    $skip: Int
    $sortBy: [SortInteractiveCommentsBy!]
    $where: InteractiveWhereInput
  ) {
    _allInteractivesMeta(where: $where) {
      count
    }
    allInteractives(where: $where) {
      id
      comments(sortBy: $sortBy, first: $first, skip: $skip) {
        id
        content
        createdAt
        createdBy {
          id
          name
          avatar {
            publicUrl
          }
        }
        my_interactive {
          id
          reactions {
            id
            emoji
            createdBy {
              id
            }
          }
          _reactionsMeta {
            count
          }
        }
      }
      _commentsMeta {
        count
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

export default function InteractiveListController({
  UI,
  first = 3,
  skip,
  sortBy,
  where,
  ...props
}) {
  const { loading, error, data = {}, fetchMore, refetch } = useQuery(
    INTERACTIVE_LIST,
    {
      variables: { first, where, skip, sortBy },
    }
  );
  const { allInteractives, _allInteractivesMeta = {} } = data;
  const { comments } = allInteractives;
  const { count = 0 } = allInteractives._commentsMeta;
  console.log(count);
  function getMore(e) {
    if (loading || error) return;
    if (count <= comments.length) return;
    fetchMore({
      variables: { skip: allPosts.length },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          ...previousResult,
          allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts],
        };
      },
    });
  }
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allInteractives={allInteractives}
      count={count}
      refetch={refetch}
    />
  );
}
