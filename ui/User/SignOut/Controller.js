import React, { useContext } from "react";
import { useMutation, gql, useApolloClient, useQuery } from "@apollo/client";
import { AuthContext } from "../../Provider/Native";
export const USER_SIGNIN = gql`
  mutation {
    status: unauthenticateUser {
      success
    }
  }
`;
export default function UserSignOut({ UI, navigation }) {
  const client = useApolloClient();
  const auth = useContext(AuthContext);
  const [on, result = {}] = useMutation(USER_SIGNIN, {
    onCompleted: async ({ status }) => {
      await client.clearStore();
      await client.resetStore();
      navigation.navigate("home");
    },
    onError: (error) => {},
  });
  const { loading, error, data = {} } = result;
  const { status } = data;
  return (
    <UI
      signOut={on}
      loading={loading}
      error={error}
      status={status}
      auth={auth}
    />
  );
}
