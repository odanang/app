import React, { useContext } from "react";
import { useMutation, gql, useApolloClient, useQuery } from "@apollo/client";
import { AuthContext } from "../../Provider/Native";
export const USER_SIGNIN = gql`
  mutation {
    unauthenticateUser {
      success
    }
  }
`;
export default function UserSignOut({ UI, navigation }) {
  const client = useApolloClient();
  const auth = useContext(AuthContext);
  const [on, result = {}] = useMutation(USER_SIGNIN, {
    onCompleted: async (data) => {
      await navigation.navigate("home");
      await client.clearStore();
      await client.resetStore();
    },
    onError: (error) => { },
  });
  const { loading, error, data = {} } = result;
  const { unauthenticateUser } = data;
  return (
    <UI
      signOut={on}
      loading={loading}
      error={error}
      unauthenticateUser={unauthenticateUser}
      auth={auth}
    />
  );
}
