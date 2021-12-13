import React, { useState, useEffect, useRef, useContext } from "react";
import { Button, Box } from "native-base";
import { HiBell } from "react-icons/hi";
import NotificationListSimple from "../List/Simple";
import { AuthContext } from "../../Provider/Native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

MaterialCommunityIcons.loadFont();

function UI() {
  const ref = useRef();
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const user = useContext(AuthContext).user;
  const notificationHandler = () => {
    setIsOpenNotification((prev) => !prev);
  };

  useEffect(() => {
    const hideNotification = (e) => {
      if (
        isOpenNotification &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setIsOpenNotification(false);
      }
    };
    document.addEventListener("mousedown", hideNotification);
    return () => {
      document.removeEventListener("mousedown", hideNotification);
    };
  }, [isOpenNotification]);

  return (
    <Box position="relative" right="0" ref={ref}>
      <Button
        onPress={notificationHandler}
        rounded="100"
        bgColor="gray.100"
        p="10px"
        _text={{ color: "gray.400", fontWeight: "600" }}
      >
        <MaterialCommunityIcons name="bell" color="#a1a1aa" size={18} />
      </Button>
      {isOpenNotification && (
        <NotificationListSimple
          notificationHandler={notificationHandler}
          id={user?.id}
        />
      )}
    </Box>
  );
}
export default UI;
