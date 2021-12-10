import React from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
import { INTERACTIVE_LIST } from "../List/Controller";
export const INTERACTIVE_ITEM = gql`
  query(
    $id: ID!
    $sortBy: [SortInteractiveCommentsBy!]
    $first: Int
  ) {
    Interactive(where:{id: $id}) {
      id
      comments(sortBy: $sortBy, first: $first) {
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
        interactive {
          id
          _commentsMeta {
            count
          }
        }
        my_interactive{
          id
        }
      }
      _commentsMeta {
        count
      }
      reactions {
        id
        emoji
        createdBy {
          name
          avatar {
            publicUrl
          }
        }
      }
      _reactionsMeta {
        count
      }
      createdAt
    }
    user: authenticatedUser {
      id
      phone
      name
      email
      avatar {
        publicUrl
      }
      gender
      description
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

export default function InteractiveItem({
  UI,
  id,
  where,
  sortBy,
  first = 3,
  skip,
}) {
  const { loading, error, data = {}, fetchMore, refetch } = useQuery(
    id ? INTERACTIVE_ITEM : INTERACTIVE_LIST,
    {
      variables: id ? { id, sortBy, first } : { where, sortBy, first, skip },
    }
  );
  const { Interactive: interactive = {}, user = {} } = data;
  const timeAgo = formatTimeCreate(interactive?.createdAt);
  return (
    <UI
      loading={loading}
      error={error}
      interactive={interactive}
      user={user}
      refetch={refetch}
      timeAgo={timeAgo}
    />
  );
}
