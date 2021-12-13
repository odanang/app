import React, { useContext } from "react";
import { Text as RNText } from "react-native";
import { Container, Box, Flex, Text, VStack } from "native-base";
import { Platform } from "react-native";
import { UserListSuggestFixed } from "../ui/User";
import { PostListSearch } from "../ui/Post";
import { UserListSearch } from "../ui/User";
import { useRoute } from "@react-navigation/core";
import { AuthContext } from "../ui/Provider/Native";
import HeadersSearch from "../ui/Headers/Search";
export default function Result({ navigation }) {
  const { user } = useContext(AuthContext);
  const { params = {} } = useRoute();
  const { keyword } = params;
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt={Platform.OS === "web" ? "64px" : "0"}
      maxW="full"
      px="8px"
    >
      {Platform.OS === "web" ? (
        <Flex w="full" direction="row">
          <>
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
            <Box
              flex={[0, 0, 0, 3]}
              display={["none", "none", "none", "block"]}
            >
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
          </>
        </Flex>
      ) : (
        <>
          <VStack w="100%">
            <HeadersSearch />
            {keyword && (
              <>
                <Box w="full" mt="12px" my="20px" px="0.5%">
                  <RNText
                    style={{
                      fontWeight: "500",
                      fontFamily: "Lexend_500Medium",
                      fontSize: 20,
                    }}
                  >
                    Kết quả tìm kiếm cho {keyword}
                  </RNText>
                </Box>
                <UserListSearch keyword={keyword} my_id={user?.id} />
              </>
            )}
          </VStack>
        </>
      )}
    </Container>
  );
}
