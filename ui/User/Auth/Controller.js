import React, { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { AuthContext } from "../../Provider/Native";
export default function Controller({ UI, navigation, ...props }) {
  const { loading, error, data = {} } = useContext(AuthContext);
  const { user = {} } = data;
  return (
    <UI
      {...props}
      navigation={navigation}
      loading={loading}
      error={error}
      user={user}
    />
  );
}
