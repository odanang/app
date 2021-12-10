import React, { useContext } from "react";
import ItemAvatar from "../../../User/Item/Avatar";
import DeleteText from "../Delete/Text";
import { HStack, Box, Text } from "native-base";
import { CommenItemController } from "./Controller";
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

export function UI({ loading, error, comment = {}, refetch, timeAgo, onDeleted }) {
  const { user = {} } = useContext(AuthContext)
  const { interactive = {} } = comment;
  const { _commentsMeta = {} } = interactive;
  if (loading) return <Text>Đang tải</Text>;
  return (
    <Box mx="auto" my="2" w="full">
      <HStack space="2" display="flex" flexDirection="row" w="full">
        <ItemAvatar existing={{ user: comment.createdBy }} />
        <Box px="3">
          <Box bgColor="gray.50" rounded="8" py="2" flex="1">
            <Link to={{ screen: "users", params: { id: comment?.createdBy?.id } }}>
              <Text color="gray.900" fontWeight="600" fontSize="14">
                {comment?.createdBy?.name}
              </Text>
            </Link>
            <Text color="gray.700" lineHeight="18">
              {comment?.content}
            </Text>
          </Box>
          <HStack mt='1' space="2">
            {comment.my_interactive && <InteractiveItemShort id={comment.my_interactive.id} />}
            {comment.createdBy && user.id === comment.createdBy.id && <DeleteText id={comment.id} onCompleted={onDeleted} />}
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}
export default function InteractionCommentItemSimple(props) {
  return <CommenItemController {...props} UI={UI} />;
}
