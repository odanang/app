import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { PostListRefetch } from "../List/Controller";
export const USER_UPDATE = gql`
    mutation($id: ID!, $data: UserUpdateInput) {
        updateUser(id: $id, data: $data) {
            id
        }
    }
  
`;
export default function PostCreate({ UI, post, navigation }) {
    const [on, { loading, error, data = {} }] = useMutation(USER_UPDATE);
    if (loading) return "...";
    if (error) return error.message;

    return (
        <UI
            loading={loading}
            error={error}
            on={on}
        />
    );
}
