import React, { Fragment } from "react";
import { Button, VStack, Box, Text } from "native-base";
import PostItemSimple from "../Item/Simple";
import PostCreateButton from "../Create/Button";
import PostItemSkeletonSimple from "./SkeletonSimple";
import PostListController from "./Controller";
import { ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function UI({ loading, error, allPosts, count, loadMore, loadingMore, refetch }) {
	if (loading || error) {
		return <PostItemSkeletonSimple />;
	}

	return (
		<VStack mb="20px">
			<KeyboardAwareScrollView style={{ width: "100%" }}>
				<ScrollView>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<Fragment>
							<PostCreateButton />
							<Box px={[0,1]}>
								{allPosts.map((post) => (
									<PostItemSimple key={post.id} existing={{ post }} />
								))}
									{loadingMore && <PostItemSkeletonSimple />}
									{count > allPosts.length && (
										<Button
										my={3}
										bgColor="green.500"
										_text={{
											color: "white",
											fontSize: ["13", "14"],
											fontWeight: "600",
										}}
										rounded="8"
										py="2"
										px="4"
										onPress={loadMore}
									>
											<Text>{loadingMore ? 'Đang tải' : 'Tải thêm bài viết'}</Text>
										</Button>
									)}
									</Box>
								</Fragment>
							</TouchableWithoutFeedback>
						</ScrollView>
					</KeyboardAwareScrollView>
				</VStack>
	);
}
export default function PostListSimple(props) {
	return <PostListController {...props} UI={UI} />;
}
