import React from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
export const POST_LIST = gql`
  query(
    $first: Int
    $skip: Int
    $sortBy: [SortPostsBy!]
    $where: PostWhereInput
  ) {
    _allPostsMeta(where: $where) {
      count
    }
    allPosts(first: $first, skip: $skip, sortBy: $sortBy, where: $where) {
      id
      content
      tags {
        content
      }
      images {
        file {
          publicUrl
        }
      }
      interactive {
        comments {
          content
        }
        reactions {
          emoji
        }
      }
      createdBy {
        id
      }
    }
  }
`;
export const PostListRefetch = makeVar(() => {});

export default function PostListController({
  UI,
  first = 20,
  skip,
  sortBy = 'createdAt_DESC',
  where,
  ...props
}) {
  const { loading, error, data = {}, fetchMore, refetch } = useQuery(
    POST_LIST,
    {
      variables: { first, where, skip, sortBy },
    }
  );
  const { allPosts, _allPostsMeta = {} } = data;
  const { count = 0 } = _allPostsMeta;

  function getMore(e) {
    if (loading || error) return;
    if (count <= allPosts.length) return;
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
  if (refetch) PostListRefetch(refetch);
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allPosts={allPosts}
      getMore={getMore}
      count={count}
    />
  );
}
