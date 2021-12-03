import React from "react";
import { gql, useQuery } from "@apollo/client";
export const SEARCH_USER = gql`
  query($keyword: String) {
    allUsers(
      where: {
        OR: [
          { OR: { name_contains_i: $keyword } }
          { OR: { phone_contains: $keyword } }
        ]
      }
    ) {
      id
      phone
      name
      avatar {
        publicUrl
      }
    }
  }
`;
export const RELATIONSHIP = gql`
  query($my_id: ID!, $id: ID!) {
    allRelationships(
      where: {
        OR: [
          { OR: { createdBy: { id: $my_id }, to: { id: $id } } }
          { OR: { createdBy: { id: $id }, to: { id: $my_id } } }
        ]
      }
    ) {
      id
      isAccepted
      createdBy {
        id
      }
      to {
        id
      }
    }
  }
`;
export default function UserList({ UI, keyword, my_id }) {
  const { loading, error, data = {} } = useQuery(SEARCH_USER, {
    variables: { keyword },
  });
  const { allUsers = [] } = data;
  // let relationship = []
  // allUsers.map((user) => {
  //   const { loading, error, data = {} } = useQuery(RELATIONSHIP, {
  //     variables: { id: user.id, my_id: my_id },
  //   });
  //   const { allRelationships = [] } = data;
  //   if (allRelationships.length === 0) {
  //     relationship.push(null)
  //   } else {
  //     relationship.push(allRelationships[0])
  //   }
  // })
  return (
    <UI
      loading={loading}
      error={error}
      allUsers={allUsers}
    />
  );
}
