import React from 'react'
import { gql, useMutation, useReactiveVar } from '@apollo/client'
import { refetchUserItem } from '../../User/Item/Controller'
import { refetchUserRequest } from '../../User/Request/Controller'

export const RELATIONSHIP_DELETE = gql`
  mutation ($id: ID!) {
    deleteRelationship(id: $id) {
      id
      isAccepted
    }
  }
`

export default function RelationshipDelete({ UI, id, page, refetchFriends }) {
  const userItemRefetch = useReactiveVar(refetchUserItem)
  const userRequestRefetch = useReactiveVar(refetchUserRequest)
  const [on, { loading, error, data = {} }] = useMutation(RELATIONSHIP_DELETE, {
    onCompleted: (data) => {
      if (page == 'FR') userRequestRefetch()
      else if (page == 'FP') refetchFriends()
      else userItemRefetch()
    },
  })
  const { deleteRelationship } = data
  const clickDetete = () => {
    on({ variables: { id } })
  }
  return (
    <UI
      loading={loading}
      error={error}
      clickDetete={clickDetete}
      relationship={deleteRelationship}
      id={id}
    />
  )
}
