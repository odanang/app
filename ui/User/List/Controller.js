import React from "react";
import { gql, useQuery } from "@apollo/client";
// export const POST_LIST = gql`
//   query($first: Int, $where: UserWhereInput) {
//     _allUsersMeta(where: $where) {
//       count
//     }
//     allUsers(first: $first, where: $where) {
//       id
//       phone
//       name
//       avatar {
//         publicUrl
//       }
//     }
//   }
// `;
export const POST_LIST = gql`
  query($first: Int, $where: UserWhereInput) {
    _allUsersMeta(where: $where) {
      count
    }
    allUsers(first: $first, where: { isAdmin: true } ) {
      id
      phone
      name
      avatar {
        publicUrl
      }
    }
  }
`;
export default function UserList({ UI, first = 4, where, ...props }) {
  const { loading, error, data = {}, refetch } = useQuery(POST_LIST, {
    variables: { first, where },
  });
  const { allUsers = [], _allUsersMeta = {} } = data;
  const [user = {}] = allUsers;
  const { count } = _allUsersMeta;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allUsers={allUsers}
      user={user}
      count={count}
      refetch={refetch}
    />
  );
}
