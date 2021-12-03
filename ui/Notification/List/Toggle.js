import React, { useState } from "react";
import { Button, Box } from "native-base";
import { HiBell } from "react-icons/hi";
import NotificationListSimple from "../List/Simple";

function UI() {
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const notificationHandler = () => {
    setIsOpenNotification((prev) => !prev);
  };

  return (
    <Box position="relative" right="0">
      <Button
        onPress={notificationHandler}
        rounded="100"
        bgColor="gray.100"
        p="10px"
        _text={{ color: "gray.400", fontWeight: "600" }}
      >
        <HiBell color="#a1a1aa" />
      </Button>
      {isOpenNotification && (
        <NotificationListSimple notificationHandler={notificationHandler} />
      )}
    </Box>
  );
}
export default UI;
