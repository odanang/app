import React, { useState, useContext } from "react";
import ListToggleText from "../List/ToggleText";
import ItemAvatar from "../../../User/Item/Avatar";
import DeleteText from "../Delete/Text";
import {
  InteractionReactionCreateText,
  InteractionReactionListTextWithCount,
} from "../../Reaction";
import { VStack, HStack, Box, Image, Text } from "native-base";
import { CommenItemController } from "./Controller";
import InteractiveItemSimple from "../../Item/Simple";
import { Link } from "@react-navigation/native";
import { AuthContext } from '../../../Provider/Native'
import InteractiveItemShort from "../../Item/Short";

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

export function UI({ loading, error, comment = {}, refetch, timeAgo }) {
  const { user } = useContext(AuthContext)
  const [open, setOpen] = useState(false);
  const stringCreatedAt = formatTimeCreate(comment?.createdAt);
  const { interactive = {} } = comment;
  const { _commentsMeta = {} } = interactive;
  const { count = 0 } = _commentsMeta;
  if (loading) return <Text>Đạng tải</Text>;
  console.log(comment)
  return (
    <Box mx="auto" my="2" w="full">
      <VStack>
        <HStack space="2" display="flex" flexDirection="row" w="full">
          <ItemAvatar existing={{ user: comment.createdBy }} />
          <VStack flex="1">
            <HStack>
              <Box bgColor="gray.50" rounded="8" px="3" py="2" flex="1">
                <Link to={{ screen: "users", params: { id: comment?.createdBy?.id } }}>
                  <Text color="gray.900" fontWeight="600" fontSize="14">
                    {comment?.createdBy?.name}
                  </Text>
                </Link>
                <Text color="gray.700" lineHeight="18">
                  {comment?.content}
                </Text>
              </Box>
            </HStack>

            <InteractiveItemShort id={comment.my_interactive.id} />
            <HStack ml="3" mt="1">

            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
export default function InteractionCommentItemSimple(props) {
  return <CommenItemController {...props} UI={UI} />;
}
