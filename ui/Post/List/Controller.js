import React, { useContext, useState, useEffect } from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
import { AuthContext } from "../../Provider/Native";
export const POST_LIST = gql`
  query(
    $first: Int
    $skip: Int
    $sortBy: [SortPostsBy!]
    $where: PostWhereInput
  ) {
    _allPostsMeta {
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
  first = 4,
  skip,
  sortBy = "createdAt_DESC",
  where,
  navigation,
}) {
  const { user } = useContext(AuthContext);

  if (!user) return "..."
  const {
    loading,
    error,
    data = {},
    fetchMore,
    refetch,
  } = useQuery(POST_LIST, {
    variables: { first, where, skip, sortBy, user: { id: user.id } },
  });
  
  const [loadingMore, setLoadingMore] = useState(false);
  const { allPosts = [], _allPostsMeta = {} } = data;
  const { count = 0 } = _allPostsMeta;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("post list home");
      console.log(allPosts.length);
      refetch();
    });

    return unsubscribe;
  }, [navigation]);

  function loadMore(e) {
    if (loading || error) return;
    setLoadingMore(true);
    fetchMore({
      variables: { skip: allPosts.length },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          ...previousResult,
          allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts],
        };
      },
    }).finally(() => {
      setLoadingMore(false);
    });
  }

  return (
    <UI
      loading={loading}
      error={error}
      allPosts={allPosts}
      count={count}
      loadMore={loadMore}
      loadingMore={loadingMore}
      refetch={refetch}
    />
  );
}
