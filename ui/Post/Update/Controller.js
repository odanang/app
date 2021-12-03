import { gql, useMutation } from "@apollo/client";

export const POST_UPDATE = gql`
  mutation($id: ID!, $data: UpdatePostInput) {
    updatePost(id: $id, data: $data) {
      id
      content
      tags {
        content
      }
    }
  }
`;

export default function PostUpdate({ UI, children, post }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_UPDATE);
  const { updatePost } = data;
  return (
    <UI
      loading={loading}
      error={error}
      post={post}
      on={on}
      updatePost={updatePost}
    />
  );
}
