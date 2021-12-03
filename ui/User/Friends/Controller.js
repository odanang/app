import React from "react";
import { gql, useQuery } from "@apollo/client";
export const FRIEND_LIST = gql`
  query($id: ID!) {
    allRelationships(
      where: {
        OR: [
          { OR: { createdBy: { id: $id }, isAccepted: true } }
          { OR: { to: { id: $id }, isAccepted: true } }
        ]
      }
    ) {
      id
      isAccepted
      createdBy {
        id
        phone
        name
        avatar {
          publicUrl
        }
      }
      to {
        id
        phone
        name
        avatar {
          publicUrl
        }
      }
    }
  }
`;
export default function UserList({ UI, where, id, ...props }) {
  const { loading, error, data = {}, refetch  } = useQuery(FRIEND_LIST, {
    variables: { id },
  });
  const { allRelationships = [] } = data;
  let allUsers = []
  allRelationships.map((relationship) => {
    if (relationship?.createdBy?.id === id) allUsers.push(relationship?.to)
    if (relationship?.to?.id === id) allUsers.push(relationship?.createdBy)
  })
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allUsers={allUsers}
      refetch={refetch}
    />
  );
}
