import React, { useEffect } from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
export const FRIEND_LIST = gql`
  query($id: ID!) {
    allRelationships(where: { to: { id: $id }, isAccepted: false }) {
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

export const refetchUserRequest = makeVar(() => {});

export default function UserList({ UI, where, id, navigation, ...props }) {
  const { loading, error, data = {}, refetch } = useQuery(FRIEND_LIST, {
    variables: { id },
  });
  const { allRelationships = [] } = data;
  let allUsers = [];
  allRelationships.map((relationship) => {
    allUsers.push(relationship?.createdBy);
  });
  if (refetch) refetchUserRequest(refetch);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     refetch();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allUsers={allUsers}
      refetch={refetch}
      allRelationships={allRelationships}
    />
  );
}
