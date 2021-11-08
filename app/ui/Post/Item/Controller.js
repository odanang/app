import React from "react";
import { gql, useQuery } from "@apollo/client";
import { POST_LIST } from "../List/Controller";
export const POST_ITEM = gql`
  query($id: ID!) {
    Post(where: { id: $id }) {
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
        comments {
          content
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
export default function PostItem({ UI, id, where }) {
  const { loading, error, data = {}, refetch } = useQuery(
    id ? POST_ITEM : POST_LIST,
    {
      variables: id ? { id } : { where },
    }
  );

  const { allPosts, Post } = data;
  const [post] = allPosts || [Post];
  return <UI loading={loading} error={error} post={post} refetch={refetch} />;
}
