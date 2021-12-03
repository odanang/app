import React from "react";
import { Box, VStack } from "native-base";
import NotificationItemSimple from "../Item/Simple";
import { Link } from "@react-navigation/native";

const data = [
  {
    id: 1,
    user: "Nguyễn Kim Huy",
    imgUrl:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719777/200960556_1184264562021915_3530694902678239694_n_u7mk8s.jpg",
    content: "đã bình luận về bài viết của bạn.",
    time: "2 giờ",
  },
  {
    id: 2,
    user: "Trần Diệp Phương",
    imgUrl:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
    content: "đã gửi lời mời kết bạn.",
    time: "3 giờ",
  },
  {
    id: 3,
    user: "Trần Vũ Minh Triết",
    imgUrl:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
    content: "đã chấp nhận lời mời kết bạn.",
    time: "4 giờ",
  },
  {
    id: 4,
    user: "Trần Vũ Minh Triết",
    imgUrl:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/156458382_874843366689762_6113705464882053665_n_tl05xu.jpg",
    content: "đã thích bài viết của bạn.",
    time: "5 giờ",
  },
];

function UI(props) {
  return (
    <Box position="absolute" top="10" right="0" w="300px">
      <VStack
        py="8px"
        bgColor="white"
        rounded="8px"
        borderWidth="1px"
        borderColor="gray.100"
        alignItems="start"
      >
        {data.map((item) => (
          <NotificationItemSimple key={item.id} item={item} />
        ))}
      </VStack>
    </Box>
  );
}
export default UI;
