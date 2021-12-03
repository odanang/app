import React from "react";
import { gql, useQuery } from "@apollo/client";
export const RELATIONSHIP_LIST = gql`
  query($where: RelationshipWhereInput) {
    _allRelationshipsMeta(where: $where) {
      count
    }
    allRelationships(where: $where) {
      id
    }
  }
`;
export default function RelationshipListController({ UI, where, ...props }) {
  const { loading, error, data = {}, refetch } = useQuery(RELATIONSHIP_LIST, {
    variables: { where },
  });
  const { _allRelationshipsMeta = {}, allRelationships = [] } = data;
  const { count = 0 } = _allRelationshipsMeta;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allRelationships={allRelationships}
      count={count}
      refetch={refetch}
    />
  );
}
