import React from "react";
import { gql, useMutation } from "@apollo/client";
export const USER_UPDATE = gql`
  mutation($id: ID!, $data: UserUpdateInput) {
    updateUser(id: $id, data: $data) {
      id
    }
  }
`;
export default function UserCreateController({ UI, user, onCompleted = () => { } }) {
  const [on, { loading, error, data = {} }] = useMutation(USER_UPDATE, {
    onCompleted: (data) => {
      onCompleted(data)
    }
  });
  return <UI user={user} loading={loading} error={error} on={on} data={data} />;
}
