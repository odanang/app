import { gql, useQuery } from "@apollo/client";
import { RELATIONSHIP_LIST } from "../List/Controller";
export const RELATIONSHIP_ITEM = gql`
  query($id: ID!) {
    Relationship(where:{ id: $id}) {
    id
    to {
      id
      name
      }
    createdBy {
      id
      name
      gender
      }
    isAccepted
    }
`;
export function RelationshipItemController(UI, id, where) {
  const { loading, error, data = {} } = useQuery(
    id ? RELATIONSHIP_ITEM : RELATIONSHIP_LIST,
    {
      variables: id ? { id } : { where },
    }
  );
  const { allRelationships, Relationship } = data;
  const [relationship] = allRelationships || [Relationship];
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      relationship={relationship}
    />
  );
}
