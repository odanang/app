import React from "react";
import { Container, HStack, Box, Image } from "native-base";
import AuthController from "../User/Auth/Controller";
import { Link } from "@react-navigation/native";
import { UserAuthShort } from "../User";
import Options from "./Options";
import { NotificationListToggle } from "../Notification";
import HeadersSearch from "./Search";

function UI({ user, navigation, route, options, back }) {
  return (
    <Box
      w="full"
      position="fixed"
      borderBottomWidth="1px"
      borderColor="gray.100"
      bgColor="white"
    >
      <Container w="container.lg" mx="auto" maxW="full" px="8px">
        <Box safeAreaTop pt="12px" pb="8px" boxSize="full">
          <HStack justifyContent="space-between" alignItems="center">
            <Link to={{ screen: "home" }}>
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/cloudinaryassets/image/upload/v1633593799/logo-header_qh37fo.svg",
                }}
                alt="Logo"
                w="150px"
                h="40px"
              />
            </Link>
            {user && <HeadersSearch />}
            {user && (
              <HStack alignItems="center" space="10px">
                <Box display={["none", "block"]}>
                  <UserAuthShort navigation={navigation} />
                </Box>
                <NotificationListToggle />
                <Options navigation={navigation} />
              </HStack>
            )}
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
export default function HeaderSimple(props) {
  return <AuthController {...props} UI={UI} />;
}
