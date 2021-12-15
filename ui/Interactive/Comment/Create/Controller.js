import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../../../Provider/Native";

export const COMMENT_CREATE = gql`
  mutation($data: InteractiveCommentCreateInput) {
    createInteractiveComment(data: $data) {
      id
      content
    }
  }
`;

export default function CommentCreate({
  UI,
  interactive,
  onCompleted = () => {},
  id,
}) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_CREATE, {
    onCompleted: (data) => {
      console.log("data", data);
      onCompleted(data);
    },
    onError: (e) => {
      console.log(e);
    },
  });
  //
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState("");

  const clickCreate = () => {
    const data = {
      interactive: {
        connect: { id: interactive?.id },
      },
      content,
    };
    console.log(data, interactive);
    if (!loading && interactive) {
      on({
        variables: {
          data,
        },
      });
    }
  };
  const contentChangeHandle = (e) => {
    setContent(Platform.OS === "web" ? e.target.value : e);
  };
  const userCommentHandle = (e) => {
    const value = Platform.OS === "web" ? e.target.value : e.nativeEvent.text;
    if (!value.trim().length) {
      return;
    }
    clickCreate();
    setContent("");
  };

  return (
    <UI
      loading={loading}
      error={error}
      content={content}
      contentChangeHandle={contentChangeHandle}
      userCommentHandle={userCommentHandle}
      interactive={interactive}
      id={id}
      data={data}
    />
  );
}
