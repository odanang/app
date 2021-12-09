import React, { useContext, useState } from 'react'
import { Button, Box } from 'native-base'
import { HiBell } from 'react-icons/hi'
import NotificationListSimple from '../List/Simple'
import { AuthContext } from '../../Provider/Native'

function UI() {
  const [isOpenNotification, setIsOpenNotification] = useState(false)

  const notificationHandler = () => {
    setIsOpenNotification((prev) => !prev)
  }
  const user = useContext(AuthContext).user
  return (
    <Box position="relative" right="0">
      <Button
        onPress={notificationHandler}
        rounded="100"
        bgColor="gray.100"
        p="10px"
        _text={{ color: 'gray.400', fontWeight: '600' }}
      >
        <HiBell color="#a1a1aa" />
      </Button>
      {isOpenNotification && (
        <NotificationListSimple
          notificationHandler={notificationHandler}
          id={user?.id}
        />
      )}
    </Box>
  )
}
export default UI
