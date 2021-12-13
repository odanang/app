import React from "react";
import { HStack, Box, VStack, Text, Divider } from "native-base";
import PostItemImageOnly from "../../Post/Item/ImageOnly";
// import PostItemSkeletonGrid from "./SkeletonGrid";

const data = [
  {
    id: 1,
    link: "#",
    thumbnailUrl:
      "https://vcdn1-dulich.vnecdn.net/2018/10/27/home-venice-italy.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=PnlZagm9qKzpioNh9CVmUA",
  },
  {
    id: 2,
    link: "#",
    thumbnailUrl:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632806027/241259419_246687107340299_4139464774758156957_n_s1zuao.jpg",
  },
  {
    id: 3,
    link: "#",
    thumbnailUrl: "https://static.toiimg.com/photo/84475061.cms",
  },
  {
    id: 4,
    link: "#",
    thumbnailUrl:
      "http://tonyenglish.vn/uploads/news/2019/0106/1546787257_MW-GY949_travel_20181122135819_ZH.jpg",
  },
  {
    id: 5,
    link: "#",
    thumbnailUrl:
      "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
  },
  {
    id: 6,
    link: "#",
    thumbnailUrl:
      "https://tuandungtravel.com/wp-content/uploads/2019/07/du-lich-ba-na-hills-tuan-dung-travel-9.jpg",
  },
];

function UI(loading) {
  // if (loading) {
  //   return <PostItemSkeletonGrid />;
  // }

  return (
    <VStack w="full">
      <Box w="full" mt="20px" mb="8px" px="0.5%">
        <Text fontSize="18px" fontWeight="600" color="gray.700">
          Bài viết bạn đã lưu
        </Text>
      </Box>

      <HStack maxw="full" w="full" flexWrap="wrap" justifyContent="flex-start">
        {data.map((item) => (
          <Box
            key={item.id}
            minW={["49%", "32%", "24%"]}
            m="0.5%"
            borderWidth="1px"
            borderColor="gray.100"
            rounded="10px"
            overflow="hidden"
          >
            <PostItemImageOnly key={item.id} item={item} />
          </Box>
        ))}
      </HStack>
    </VStack>
  );
}
export default UI;
