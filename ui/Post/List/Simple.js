import React, { Fragment } from 'react'
import { Button, VStack, Box, Text } from 'native-base'
import PostItemSimple from '../Item/Simple'
import PostCreateButton from '../Create/Button'
import PostItemSkeletonSimple from './SkeletonSimple'
import PostListController from './Controller'

function UI({
  loading,
  error,
  allPosts,
  count,
  loadMore,
  loadingMore,
  refetch,
}) {
  if (loading) {
    return <PostItemSkeletonSimple />
  }

  return (
    <VStack mb="20px">
      <PostCreateButton />
      {allPosts.map((post) => (
        <PostItemSimple
          key={post.id}
          existing={{ post }}
          refetchPostList={refetch}
        />
      ))}
      {loadingMore && <PostItemSkeletonSimple />}
      {count > allPosts.length && (
        <Box px="2">
          <Button
            my={3}
            bgColor="green.500"
            _text={{
              color: 'white',
              fontSize: ['13', '14'],
              fontWeight: '600',
            }}
            rounded="8"
            py="2"
            px="4"
            onPress={loadMore}
          >
            {loadingMore ? 'Đang tải' : 'Tải thêm bài viết'}
          </Button>
        </Box>
      )}
    </VStack>
  )
}
export default function PostListSimple(props) {
  return <PostListController {...props} UI={UI} />
}
