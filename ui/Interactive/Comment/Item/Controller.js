import React from "react";
import { gql, useQuery } from "@apollo/client";
import { COMMENT_LIST } from "../List/Controller";
export const COMMENT_ITEM = gql`
  query($id: ID!) {
    InteractiveComment(where: { id: $id }) {
      id
      content
      createdAt
      createdBy {
        name
        avatar {
          publicUrl
        }
        id
      }
      my_interactive{
        id
      }
    }
  }
`;
export function CommenItemController({ UI, id, where, refetchInteractiveItem }) {
  const { loading, error, data = {} } = useQuery(
    id ? COMMENT_ITEM : COMMENT_LIST,
    {
      variables: id ? { id } : { where },
    },
  );
  const { allInteractiveComments, InteractiveComment } = data;
  const [comment] = allInteractiveComments || [InteractiveComment];
  return <UI loading={loading} error={error} comment={comment} refetchInteractiveItem={refetchInteractiveItem} />;
}
