import { Link, HStack, Input, Stack } from "native-base";
import { useState } from "react";
import Controller from "./Controller";

function UI({ on, loading, error, comment }) {
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    const content = e.target.value;
    setContent(content);
  };
  const handleUpdate = (e) => {
    on({
      variables: {
        id: comment.id,
        data: { content: content },
      },
    });
    return (
      <HStack>
        <Input defaultValue={comment.content} onChange={handleChange} />
        <Link onClick={handleUpdate}>Cập nhật</Link>
      </HStack>
    );
  };
}

export default function InteractiveCommentupdateSimple(props) {
  return <Controller {...props} UI={UI} />;
}
