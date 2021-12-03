import React, { Fragment, useContext, useState } from "react";
import { Button, Text } from "native-base";
import Controller from "./Controller";
import { AuthContext } from "../../../Provider/Native";

function UI({
  loading,
  error,
  onCreate,
  onDelete,
  idMyInteractive,
  reactionsCommentList,
}) {
  const arrReactions = reactionsCommentList?.map((reaction) => {
    return { idEmoij: reaction.id, userId: reaction.createdBy?.id  };
  });
  const arrUserId = reactionsCommentList.map((reaction) => {
    return reaction.createdBy?.id;
  });
  let idDel;
  const user = useContext(AuthContext).user;
  const [isLike, setIsLike] = useState(arrUserId.indexOf(user.id) !== -1);
  if (isLike === true)
    idDel = arrReactions[arrUserId.indexOf(user.id)]
      ? (idDel = arrReactions[arrUserId.indexOf(user.id)].idEmoij)
      : null;
  const likeHandle = (e) => {
    if (!loading && isLike === false)
      onCreate({
        variables: {
          id: idMyInteractive,
          data: {
            reactions: { create: { emoji: "like" } },
          },
        },
      });
    else
      onDelete({
        variables: {
          id: idDel,
        },
      });
    setIsLike((prev) => !prev);
  };

  return (
    <Fragment>
      {isLike && (
        <Button
          _text={{ color: "green.500", fontSize: "12", fontWeight: "600" }}
          p="0"
          bgColor="transparent"
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
      {!isLike && (
        <Button
          _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
          p="0"
          bgColor="transparent"
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
    </Fragment>
  );
}
export default function InteractionReactionCreateText(props) {
  return <Controller {...props} UI={UI} />;
}
