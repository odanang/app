import React, { useState, Fragment, useContext } from "react";
import { Button } from "native-base";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Controller from "./Controller";
import { AuthContext } from "../../../Provider/Native";

export function UI({
  interactive,
  handleClick,
  createResult,
  deleteResult,
  reactions,
  reacted,
}) {
  if (createResult.loading) return "...";
  if (deleteResult.loading) return "...";
  // const arrReactions = reactionsList?.map((reaction) => {
  //   return { idEmoij: reaction.id, userId: reaction.createdBy?.id };
  // });
  // const arrUserId =
  //   reactionsList?.map((reaction) => {
  //     return reaction.createdBy?.id;
  //   }) || [];
  // let idDel;
  // const user = useContext(AuthContext).user;
  // const [isLike, setIsLike] = useState(arrUserId.indexOf(user.id) !== -1);
  // if (isLike === true)
  //   idDel = arrReactions[arrUserId.indexOf(user.id)]
  //     ? (idDel = arrReactions[arrUserId.indexOf(user.id)].idEmoij)
  //     : null;
  // const likeHandle = (e) => {
  //   if (!loading && isLike === false)
  //     if (interactive)
  //       onCreate({
  //         variables: {
  //           id: interactive.id,
  //           data: {
  //             reactions: { create: { emoji: "like" } },
  //           },
  //         },
  //       });
  //     else
  //       onDelete({
  //         variables: {
  //           id: idDel,
  //         },
  //       });
  //   setIsLike((prev) => !prev);
  // };
  return (
    <Fragment>
      {reacted ? (
        <Button
          _text={{ color: "green.500", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FaHeart color="#22c55e" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={handleClick}
        >
          Thích
        </Button>
      ) : (
        <Button
          _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FaRegHeart color="#a1a1aa" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={handleClick}
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
