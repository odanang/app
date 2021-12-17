import React, { useState } from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { PostListRefetch } from "../List/Controller";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
export const POST_CREATE = gql`
  mutation($data: PostCreateInput) {
    createPost(data: $data) {
      id
      content
      tags {
        content
      }
    }
  }
`;

export default function PostCreate({
  UI,
  post,
  onCompleted = () => { },
}) {
  const navigation = useNavigation();
  const [on, { loading, error, data = {} }] = useMutation(POST_CREATE, {
    onCompleted: (data) => {
      onCompleted(data);
      navigation.navigate("home");
    },
  });

  const [content, setContent] = useState("");
  function changeContent(value) {
    const content = Platform.OS === 'web' ? value.target.value : value
    setContent(content);
  };

  const [previews, setPreviews] = useState([])
  const [files, setFiles] = useState([])
  function changeImages({ target: { validity, files = [] } }) {
    if (validity.valid) {
      const _this = this;
      [...files].map(file => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
          const preview = reader.result
          setPreviews(_preview => [..._preview, preview])
          setFiles(_file => [..._file, file])
        }.bind(_this);
      });
    };
  }

  const submitHandler = () => {
    if (!loading && content.trim()) {
      on({
        variables: {
          data: {
            content: content,
            interactive: { create: { comments: null, reactions: null } },
            images: { create: files.map(file => ({ file })) }
          },
        },
      });
    }
  };


  const { createPost } = data;
  return (
    <UI
      loading={loading}
      error={error}
      previews={previews}
      content={content}
      changeContent={changeContent}
      submitHandler={submitHandler}
      changeImages={changeImages}
    />
  );
}
