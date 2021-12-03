import React, { useState, Fragment, useContext } from "react";
import { Button } from "native-base";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Controller from "./Controller";
import { AuthContext } from "../../../Provider/Native";

export function UI({
  loading,
  error,
  interactive,
  onCreate,
  onDelete,
  reactionsList,
}) {
  const arrReactions = reactionsList?.map((reaction) => {
    return { idEmoij: reaction.id, userId: reaction.createdBy?.id };
  });
  const arrUserId = reactionsList.map((reaction) => {
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
          id: interactive?.id,
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
          _text={{ color: "green.500", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FaHeart color="#22c55e" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
      {!isLike && (
        <Button
          _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FaRegHeart color="#a1a1aa" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
    </Fragment>
  );
}
export default function InteractionReactionCreateButton(props) {
  return <Controller {...props} UI={UI} />;
}
