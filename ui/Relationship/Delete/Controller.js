import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { refetchUserItem } from "../../User/Item/Controller";
import { refetchUserRequest } from "../../User/Request/Controller";

export const RELATIONSHIP_DELETE = gql`
  mutation($id: ID!) {
    deleteRelationship(id: $id) {
      id
      isAccepted
    }
  }
`;

export default function RelationshipDelete({ UI, id , page}) {
  const userItemRefetch = useReactiveVar(refetchUserItem);
  const userRequestRefetch = useReactiveVar(refetchUserRequest);
  const [on, { loading, error, data = {} }] = useMutation(RELATIONSHIP_DELETE, {
    onCompleted: (data) => {
      page=='FR' ? userRequestRefetch() : userItemRefetch();
    },
  });
  const { deleteRelationship } = data;
  const clickDetete = () => {
    on({ variables: { id } });
  };
  return (
    <UI
      loading={loading}
      error={error}
      clickDetete={clickDetete}
      relationship={deleteRelationship}
      id={id}
    />
  );
}
