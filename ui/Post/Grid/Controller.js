import React from "react";
import { gql, useQuery } from "@apollo/client";
import { POST_LIST } from "../List/Controller";

export const GRID_POST = gql`
  query($id: ID!) {
    allPosts(sortBy: createdAt_DESC, where: { createdBy: { id: $id } }) {
      id
      images {
        file {
          publicUrl
        }
      }
    }
  }
`;
export default function UserItem({ UI, id }) {

  const { loading, error, data = {} } = useQuery(GRID_POST, { variables: { id } });
  const { allPosts = [] } = data;
  return <UI loading={loading} error={error} posts={allPosts} />;
}
