import React, { useEffect } from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
export const FRIEND_SUGGEST_LIST = gql`
  query($id: ID!) {
    allRelationships(
      where: {
        OR: [
          { OR: { createdBy: { id: $id }, isAccepted: true } }
          { OR: { createdBy: { id: $id }, isAccepted: false } }
          { OR: { to: { id: $id }, isAccepted: true } }
          { OR: { to: { id: $id }, isAccepted: false } }
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
    _allUsersMeta {
      count
    }
    allUsers {
      id
      phone
      name
      avatar {
        publicUrl
      }
    }
  }
`;
export const UserSuggestRefetch = makeVar(() => {});

export default function UserSuggest({ UI, id, navigation, ...props }) {
  const { loading, error, data = {}, refetch } = useQuery(FRIEND_SUGGEST_LIST, {
    variables: { id },
  });
  const { allUsers = [], _allUsersMeta = {} } = data;
  const [user = {}] = allUsers;
  const { count } = _allUsersMeta;
  const { allRelationships = [] } = data;
  let allFriends = [];
  allRelationships.map((relationship) => {
    if (relationship?.createdBy?.id === id) allFriends.push(relationship?.to);
    if (relationship?.to?.id === id) allFriends.push(relationship?.createdBy);
  });
  let friendsSuggest = [];
  friendsSuggest = allUsers.filter(
    (ar) => !allFriends.find((rm) => rm.id === ar.id || ar.id === id)
  );
  if (refetch) UserSuggestRefetch(refetch);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     console.log("sug");
  //     refetch();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      friendsSuggest={friendsSuggest}
      user={user}
      count={count}
    />
  );
}
