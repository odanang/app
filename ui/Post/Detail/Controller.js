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
export default function PostDetail({ UI, id }) {
  const { loading, error, data = {}, refetch } = useQuery(POST_ITEM, {
    variables: { id }
  }
  );

  const { Post } = data;
  const post = Post;
  console.log(post)
  return <UI loading={loading} error={error} post={post} refetch={refetch} />;
}
