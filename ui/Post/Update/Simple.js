import { Link, HStack, Input, Stack } from "native-base";
import { useState } from "react";
import Controller from "./Controller";

function UI({ on, loading, error, post }) {
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    const content = e.target.value;
    setContent(content);
  };
  const handleUpdate = (e) => {
    on({
      variables: {
        id: post.id,
        data: { content: content },
      },
    });
    return (
      <HStack>
        <Input defaultValue={post.content} onChange={handleChange} />
        <Link onClick={handleUpdate}>Cập nhật</Link>
      </HStack>
    );
  };
}

export default function PostUpdateSimple(props) {
  return <Controller {...props} UI={UI} />;
}
