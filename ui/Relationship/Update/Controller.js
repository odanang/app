import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { refetchUserItem } from "../../User/Item/Controller";
import { refetchUserRequest } from "../../User/Request/Controller";

export const RELATIONSHIP_UPDATE = gql`
  mutation($id: ID!, $data: RelationshipUpdateInput) {
    updateRelationship(id: $id, data: $data) {
      id
      to {
        id
        name
      }
      createdBy {
        id
        name
      }
      isAccepted
    }
  }
`;

export default function RelationshipUpdate({
  UI,
  children,
  relationship,
  id,
  page,
}) {
  const userItemRefetch = useReactiveVar(refetchUserItem);
  const userRequestRefetch = useReactiveVar(refetchUserRequest);
  const [on, { loading, error, data = {} }] = useMutation(RELATIONSHIP_UPDATE, {
    onCompleted: (data) => {
      page=='FR' ? userRequestRefetch() : userItemRefetch();
    },
  });
  const clickAgree = () => {
    on({ variables: { id, data: { isAccepted: true } } });
  };
  const { updateRelationship } = data;
  return (
    <UI loading={loading} error={error} clickAgree={clickAgree} /> ||
    children({ relationship, on, relationshipUpdated })
  );
}
