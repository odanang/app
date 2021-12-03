import React, { Fragment } from "react";
import { Container } from "native-base";
import { UserSignInSimple } from "../ui/User";
import { FooterSimple } from "../ui/Footer";
export default function SignIn({ navigation }) {
  return (
    <Fragment>
      <Container w="container.lg" m="auto" mt="0" maxW="90%">
        <UserSignInSimple navigation={navigation} />
      </Container>
      <FooterSimple />
    </Fragment>
  );
}
