import React from 'react'
import Controller from './Controller'
import { UI } from '../Auth/Avatar'
export default function UserAvatar(props) {
    return <Controller {...props} UI={UI} />
}