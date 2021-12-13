import React, { useContext } from "react";
import { Platform } from "react-native";
import { Container, Box, Flex } from "native-base";
import { UserListSuggestFixed } from "../ui/User";
import { PostListSimple, PostCreateButton } from "../ui/Post";
import { AuthContext } from "../ui/Provider/Native";

export default function Home({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt={Platform.OS === "web" ? "64px" : "0"}
      maxW="full"
      px={["0", "8px"]}
    >
      <Flex w="full" direction="row">
        <Box
          flex={[1, 1, 1, 9]}
          maxW="680px"
          mx={["auto", "auto", "auto", "0"]}
        >
          {/* <PostCreateButton /> */}
          <PostListSimple first={5} navigation={navigation} />
        </Box>
        {Platform.OS === "web" && (
          <Box flex={[0, 0, 0, 3]} display={["none", "none", "none", "block"]}>
            <Box
              w="full"
              py="8px"
              pl="24px"
              pr="8px"
              position="sticky"
              top="64px"
            >
              <UserListSuggestFixed id={user?.id} />
            </Box>
          </Box>
        )}
      </Flex>
    </Container>
  );
}
