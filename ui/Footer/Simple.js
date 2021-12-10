import React from "react";
import { Container, HStack, Box, Text, VStack, Stack } from "native-base";

function UI() {
  return (
    <Box
      w="full"
      borderTopWidth="1px"
      borderColor="gray.100"
      py="12px"
      mt="40px"
    >
      <Container w="container.lg" mx="auto" maxW="full" px="8px">
        <HStack
          borderBottomWidth="1px"
          borderColor="gray.100"
          pb="12px"
          mb="12px"
          w="100%"
        >
          <Text color="gray.500" fontSize={["12px", "13px"]}>
            Tiếng Việt. English. 中文 (Zhōngwén). 汉语, 漢語, 日本語 (にほんご).
            한국어, français, langue française.
          </Text>
        </HStack>
        <Stack
          justifyContent="space-between"
          w="100%"
          direction={["column", "row"]}
        >
          <VStack space="2px">
            <Text color="gray.500" fontSize={["12px", "13px"]}>
              Odanang - Mạng xã hội sinh viên.
            </Text>
            <Text color="gray.500" fontSize={["12px", "13px"]}>
              Phiên bản v1.0-beta.0
            </Text>
          </VStack>
          <VStack space="2px">
            <Text
              color="gray.500"
              fontSize={["12px", "13px"]}
              textAlign="right"
            >
              Đồ án công nghệ phần mềm PBL6.
            </Text>
            <Text
              color="gray.500"
              fontSize={["12px", "13px"]}
              textAlign="right"
            >
              Đại học Bách Khoa - Đại học Đà Nẵng. Các thành viên: 1. Trần Ngọc
              Huy 2. Nguyễn Kim Huy 3. Trần Diệp Phương 4. Trần Vũ Minh Triết
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
export default UI;
