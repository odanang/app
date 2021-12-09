import React, { useContext, useState } from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
import { AuthContext } from "../../Provider/Native";
export const POST_LIST = gql`
  query (
    $first: Int
    $skip: Int
    $sortBy: [SortPostsBy!]
    $where: PostWhereInput
    $user: UserWhereInput
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
        id
        reacted: reactions(where: { createdBy: $user }) {
          id
        }
        comments(first: 5, sortBy: createdAt_DESC) {
          id
          content
          my_interactive {
            id
            reacted: reactions(where: { createdBy: $user }) {
              id
            }
          }
        }
        reactions {
          id
          emoji
          createdBy {
            id
          }
        }
        _commentsMeta {
          count
        }
        _reactionsMeta {
          count
        }
      }
      createdAt
      createdBy {
        id
        name
        avatar {
          publicUrl
        }
      }
    }
  }
`;

export default function PostListController({
  UI,
  first = 20,
  skip,
  sortBy = "createdAt_DESC",
  where,
  ...props
}) {
  const { user } = useContext(AuthContext);

  const {
    loading,
    error,
    data = {},
    fetchMore,
    refetch,
  } = useQuery(POST_LIST, {
    variables: { first, where, skip, sortBy, user: { id: user.id } },
  });
  const { allPosts, _allPostsMeta = {} } = data;
  const { count = 0 } = _allPostsMeta;
  function loadMore(e) {
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
    }).finally(() => {
    });
  }

  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      refetch={refetch}
      allPosts={allPosts}
      count={count}
      // 
      loadMore={loadMore}
    />
  );
}
