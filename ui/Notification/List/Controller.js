import React from "react";
import { gql, useQuery } from "@apollo/client";

export const NOTIFICATION_LIST = gql`
  query($id: ID!, $first: Int) {
    allRelationships(
      first: $first
      sortBy: updatedAt_DESC
      where: { to: { id: $id } }
    ) {
      id
      isAccepted
      createdAt
      createdBy {
        id
        name
        avatar {
          publicUrl
        }
      }
      to {
        id
        name
      }
    }

    allInteractives(
      first: $first
      where: { createdBy: { id: $id }, post_is_null: false }
      sortBy: updatedAt_DESC
    ) {
      id
      comments(first: $first, sortBy: createdAt_DESC) {
        id
        content
        createdAt
        createdBy {
          id
          name
          avatar {
            publicUrl
          }
        }
      }
      reactions(first: $first, sortBy: createdAt_DESC) {
        id
        createdAt
        createdBy {
          id
          name
          avatar {
            publicUrl
          }
        }
      }
      post {
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

export default function NotificationListController({ UI, first = 4, id }) {
  const { loading, error, data = {} } = useQuery(NOTIFICATION_LIST, {
    variables: { first, id },
    pollInterval: 500,
  });
  const { allRelationships = [], allInteractives = [] } = data;
  const comments = [];
  const reactions = [];
  if (allInteractives.length)
    allInteractives.forEach((interactive) => {
      if (interactive.comments) {
        interactive.comments.forEach((comment) => {
          const commentNotiItem = {
            ...comment,
            postId: interactive?.post?.id
          }
          comments.push(commentNotiItem)
        }
        );
      }
      if (interactive.reactions) {
        interactive.reactions.forEach((reaction) => {
          const reactionNotiItem = {
            ...reaction,
            postId: interactive?.post?.id
          }
          reactions.push(reactionNotiItem)
        });
      }
    });
  const arr = [];
  arr.push(...comments, ...reactions);
  if (allRelationships) arr.push(...allRelationships);
  arr.sort((itemA, itemB) => {
    return new Date(itemB.createdAt) - new Date(itemA.createdAt);
  });
  let arrFilter = arr.filter((item) => item.createdBy?.id !== id);
  if (arrFilter.length > 4) arrFilter = arrFilter.slice(0, 4);
  const solvedData = [];
  arrFilter.forEach((item) => {
    switch (item.__typename) {
      case "InteractiveComment":
        solvedData.push({
          id: item.id,
          user: item.createdBy.name,
          imgUrl:
            "https://odanang.net" +
            (item?.createdBy?.avatar?.publicUrl || "/upload/img/no-image.png"),
          content: "đã bình luận về bài viết của bạn.",
          time: formatTimeCreate(item.createdAt),
          url: `/posts/${item?.postId}`
        });
        break;
      case "InteractiveReaction":
        solvedData.push({
          id: item.id,
          user: item.createdBy.name,
          imgUrl:
            "https://odanang.net" +
            (item?.createdBy?.avatar?.publicUrl || "/upload/img/no-image.png"),
          content: "đã thích bài viết của bạn.",
          time: formatTimeCreate(item.createdAt),
          url: `/posts/${item?.postId}`
        });
        break;
      case "Relationship":
        if (!item.isAccepted) {
          solvedData.push({
            id: item.id,
            user: item.createdBy.name,
            imgUrl:
              "https://odanang.net" +
              (item?.createdBy?.avatar?.publicUrl ||
                "/upload/img/no-image.png"),
            content: "đã gửi lời mời kết bạn đến bạn.",
            time: formatTimeCreate(item.createdAt),
            url: `/friendrequest`
          });
        }
        else {
          solvedData.push({
            id: item.id,
            user: item.createdBy.name,
            imgUrl:
              "https://odanang.net" +
              (item?.createdBy?.avatar?.publicUrl ||
                "/upload/img/no-image.png"),
            content: "và bạn đã trở thành bạn bè",
            time: formatTimeCreate(item.createdAt),
            url: `/users/${item?.createdBy?.id}`
          });
        }
        break;
      default:
        solvedData.push({});
    }
  });
  return (
    <UI
      loading={loading}
      error={error}
      data={solvedData}
      allRelationships={allRelationships}
    />
  );
}
