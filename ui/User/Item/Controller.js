import React, { useEffect } from "react";
import { Platform } from "react-native";
import { gql, makeVar, useQuery } from "@apollo/client";
import { POST_LIST } from "../List/Controller";
export const POST_ITEM_ME = gql`
  query($id: ID!) {
    User(where: { id: $id }) {
      id
      phone
      name
      description
      avatar {
        publicUrl
      }
      description
    }
    allPosts(where: { createdBy: { id: $id } }) {
      id
    }
    _allRelationshipsMeta(
      where: {
        OR: [
          { OR: { to: { id: $id }, isAccepted: true } }
          { OR: { createdBy: { id: $id }, isAccepted: true } }
        ]
      }
    ) {
      count
    }
  }
`;
export const POST_ITEM = gql`
  query($id: ID!, $my_id: ID!) {
    User(where: { id: $id }) {
      id
      phone
      name
      description
      avatar {
        publicUrl
      }
      description
    }
    allPosts(where: { createdBy: { id: $id } }) {
      id
    }
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
    _allRelationshipsMeta(
      where: {
        OR: [
          { OR: { to: { id: $id }, isAccepted: true } }
          { OR: { createdBy: { id: $id }, isAccepted: true } }
        ]
      }
    ) {
      count
    }
  }
`;

export const refetchUserItem = makeVar(() => {});

export default function UserItem({
  UI,
  where,
  id,
  my_id,
  existing,
  navigation,
}) {
  if (existing) return <UI {...existing} />;
  const { loading, error, data = {}, refetch } = useQuery(
    id && my_id ? POST_ITEM : id ? POST_ITEM_ME : POST_LIST,
    {
      variables:
        id && my_id ? { id: id, my_id: my_id } : id ? { id } : { where },
    }
  );
  const { allUsers, User } = data;
  const [user] = allUsers || [User];
  const { allPosts = [] } = data;
  const { allRelationships = [] } = data;
  const { _allRelationshipsMeta = {} } = data;
  const { count } = _allRelationshipsMeta;
  var relationship;
  if (allRelationships.length === 0) {
    relationship = null;
  } else {
    relationship = allRelationships[0];
  }

  if (Platform.OS === "web") {
    if (refetch) refetchUserItem(refetch);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("user item");
      console.log(allPosts.length);
      refetch();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <UI
      count={count}
      loading={loading}
      error={error}
      user={user}
      posts={allPosts}
      relationship={relationship}
    />
  );
}
