import React, { useContext } from "react";
import { Container, Box, Flex, Text } from "native-base";
import { UserListSuggestFixed } from "../ui/User";
import { PostListSearch } from "../ui/Post";
import { UserListSearch } from "../ui/User";
import { useRoute } from "@react-navigation/core";
import { AuthContext } from "../ui/Provider/Native";
export default function Result({ navigation }) {
  const { user } = useContext(AuthContext);
  const { params = {} } = useRoute();
  const { keyword } = params;
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt="64px"
      maxW="full"
      px={["0", "8px"]}
    >
      <Flex w="full" direction="row">
        <Box
          flex={[1, 1, 1, 9]}
          maxW="680px"
          mx={["auto", "auto", "auto", "0"]}
        >
          <Box w="full" mt="20px" mb="8px" px="0.5%">
            <Text
              fontSize={["16", "18"]}
              fontWeight="600"
              color="gray.700"
              px={["8px", "0"]}
            >
              Kết quả tìm kiếm cho {keyword}
            </Text>
          </Box>
          <UserListSearch keyword={keyword} my_id={user?.id} />
          {/* <PostListSearch /> */}
        </Box>
        <Box flex={[0, 0, 0, 3]} display={["none", "none", "none", "block"]}>
          <Box
            w="full"
            py="8px"
            pl="24px"
            pr="8px"
            position="sticky"
            top="64px"
          >
            <UserListSuggestFixed />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
