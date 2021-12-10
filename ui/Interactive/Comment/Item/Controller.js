import React from "react";
import { gql, useQuery } from "@apollo/client";
import { COMMENT_LIST } from "../List/Controller";
export const COMMENT_ITEM = gql`
  query ($id: ID!) {
    InteractiveComment(where: { id: $id }) {
      id
      content
      createdAt
      createdBy {
        name
        avatar {
          publicUrl
        }
        id
      }
      my_interactive {
        id
      }
    }
  }
`;


function formatTimeCreate(createdAt) {
  var dayjs = require("dayjs");
  let stringTime = "";
  const createdTime = dayjs(createdAt);
  const now = dayjs();
  if (now.format("DD-MM-YYYY") === createdTime.format("DD-MM-YYYY")) {
    if (Number(now.get("hour")) - Number(createdTime.get("hour")) === 0)
      stringTime =
        Number(now.get("minute")) -
        Number(createdTime.get("minute")) +
        " phút trước";
    else
      stringTime =
        Number(now.get("hour")) -
        Number(createdTime.get("hour")) +
        " giờ trước";
  } else stringTime = createdTime.format("DD-MM-YYYY");
  return stringTime;
}



export function CommenItemController({ UI, id, where, existing = {} }) {
  if (existing) {
    const timeAgo = formatTimeCreate(existing.comment?.createdAt);
    return <UI {...existing}
      timeAgo={timeAgo} />;
  }
  const {
    loading,
    error,
    data = {},
  } = useQuery(id ? COMMENT_ITEM : COMMENT_LIST, {
    variables: id ? { id } : { where },
  });
  const { allInteractiveComments, InteractiveComment } = data;
  const [comment] = allInteractiveComments || [InteractiveComment];
  const timeAgo = formatTimeCreate(comment?.createdAt);

  return (
    <UI
      loading={loading}
      error={error}
      comment={comment}
      refetchInteractiveItem={refetchInteractiveItem}
      timeAgo={timeAgo}
    />
  );
}
