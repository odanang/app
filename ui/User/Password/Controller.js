import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
export const USER_UPDATE_PASSWORD = gql`
  mutation($id: ID!, $data: UserUpdateInput) {
    updateUser(id: $id, data: $data) {
      id
    }
  }
`;
export default function ChangePassword({ UI, post, navigation, user }) {
    const [on, { loading, error, data = {} }] = useMutation(USER_UPDATE_PASSWORD);
    const {updateUser} = data;
    return <UI user={user} loading={loading} error={error} on={on} data={data} updateUser={updateUser}/>;
}
