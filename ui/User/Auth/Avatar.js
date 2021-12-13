import React from "react";
import { Image, Link } from "native-base";
import Controller from "./Controller";
export function UI({ user }) {
  return (
    <Link to={{ screen: "users", params: { id: user?.id } }}>
      <Image
        source={{
          uri:
            "https://odanang.net" +
            (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
        }}
        alt="Profile image"
        size="8"
        rounded="100"
      />
    </Link>
  );
}
export default function AuthAvatar(props) {
  return <Controller {...props} UI={UI} />;
}
