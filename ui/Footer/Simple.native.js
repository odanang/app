import React from "react";
import { Container, Box, Text, VStack, Stack } from "native-base";

function UI() {
  return (
    <Box
      w="full"
      borderTopWidth="1px"
      borderColor="gray.100"
      py="12px"
      mt="40px"
    >
      <Container w="container.lg" mx="auto" maxW="full" px="8px" py="8px">
        <Stack
          justifyContent="space-between"
          w="100%"
          direction={["column", "row"]}
        >
          <VStack space="2px">
            <Text
              color="gray.500"
              textAlign="center"
              fontSize={["12px", "13px"]}
            >
              Odanang - Mạng xã hội sinh viên.
            </Text>
            <Text
              color="gray.500"
              textAlign="center"
              fontSize={["12px", "13px"]}
            >
              Phiên bản v1.0-beta.0
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
export default UI;
