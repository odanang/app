import React from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
import { POST_LIST } from "../List/Controller";
export const POST_ITEM_ME = gql`
  query($id: ID!) {
    User(where: { id: $id }) {
      id
      phone
      name
      avatar {
        publicUrl
      }
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
      avatar {
        publicUrl
      }
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

export const refetchUserItem = makeVar(() => { });

export default function UserItem({ UI, where, id, my_id }) {
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
  const { _allRelationshipsMeta = {} } = data
  const { count } = _allRelationshipsMeta;
  var relationship;
  if (allRelationships.length === 0) {
    relationship = null;
  } else {
    relationship = allRelationships[0];
  }
  if (refetch) refetchUserItem(refetch);
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
