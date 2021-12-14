import React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { POST_ITEM } from '../Detail/Controller'

export const POST_UPDATE = gql`
  mutation ($id: ID!, $data: UpdatePostInput) {
    updatePost(id: $id, data: $data) {
      id
      content
      tags {
        content
      }
    }
  }
`

export default function PostUpdate({ UI, children, id }) {
  const {
    loadingPost,
    errorPost,
    dataPost = {},
  } = useQuery(POST_ITEM, {
    variables: { id },
  })
  const [on, { loadingUpdate, errorUpdate, dataUpdate = {} }] =
    useMutation(POST_UPDATE)
  const { updatePost } = dataUpdate
  return (
    <UI
      loading={loading}
      error={error}
      post={dataPost}
      on={on}
      updatePost={updatePost}
    />
  )
}
