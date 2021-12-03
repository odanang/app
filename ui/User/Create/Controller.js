import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";
export const USER_CREATE = gql`
  mutation($data: UserCreateInput) {
    user: createUser(data: $data) {
      id
    }
  }
`;
export default function UserCreateController({ UI, navigation }) {
  const [on, { loading, error, data = {} }] = useMutation(USER_CREATE, {
    onCompleted: ({ user }) => {
      navigation.navigate("home");
    },
    onError: (error) => {
      console.log("onError", error);
    },
  });
  const { user } = data;
  return <UI on={on} loading={loading} error={error} user={user} />;
}
