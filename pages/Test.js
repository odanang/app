import React, { Fragment } from "react";
import { Container } from "native-base";
import { PostCreateSimple, PostItemDetail } from "../ui/Post";
import { PostListSimple } from "../ui/Post";
import { InteractionCommentListSimple } from "../ui/Interactive/Comment";
export default function Test({ navigation }) {
  return (
    <Fragment>
      <Container>
      <PostCreateSimple />
      <PostListSimple first = {3}/>
      </Container>
    </Fragment>
  );
}
