import { gql, useMutation } from "@apollo/client";

export const REACTION_DELETE = gql`
  mutation($id: ID!) {
    deleteInteractiveReaction(id: $id) {
      id
      emoji
    }
  }
`;

export default function ReactionDelete({ UI, id, refetch }) {
  const refetchPostItem = () => {
    refetch();
  };
  const [on, { loading, error, data = {} }] = useMutation(REACTION_DELETE,{
    onCompleted: (data) => {
      refetchPostItem();
    }
  });
  const { deleteInteractiveReaction } = data;
  return (
    <UI
      loading={loading}
      error={error}
      onDelete={on}
      deletedReaction={deleteInteractiveReaction}
    />
  );
}
