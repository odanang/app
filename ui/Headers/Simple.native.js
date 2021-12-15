import React from "react";
import { Container, HStack, Box, Image, Stack, Button } from "native-base";
import AuthController from "../User/Auth/Controller";
import Options from "./Options";
import { NotificationListToggle } from "../Notification";
import SearchButton from "./SearchButton";

function UI({ user, navigation, route, options, back }) {
  return (
    <Box
      w="full"
      borderBottomWidth="1px"
      borderColor="gray.100"
      bgColor="white"
    >
      <Container w="container.lg" mx="auto" maxW="full" px="8px">
        {user && (
          <Box safeAreaTop pt="12px" pb="8px" w="full" pr="2">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              py="1"
            >
              <Button
                onPress={() => navigation.navigate("home")}
                bgColor="transparent"
                p="0"
              >
                <Image
                  source={{
                    uri:
                      "https://odanang.net/upload/img/61b48539441fa489c5da9ed2-odanang_logo-header.png",
                  }}
                  alt="Logo"
                  w="150px"
                  h="40px"
                  mt="-1"
                />
              </Button>

              <HStack alignItems="center" space="10px">
                <SearchButton navigation={navigation} />
                <NotificationListToggle navigation={navigation} />
                <Options navigation={navigation} />
              </HStack>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
export default function HeaderSimple(props) {
  return <AuthController {...props} UI={UI} />;
}
