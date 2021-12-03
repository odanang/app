import React from "react";
import { Container, Box } from "native-base";
import Field from "../ui/Field";

const content = `
# Odanang
## Mạng xã hội dành cho sinh viên

![Logo](https://res.cloudinary.com/cloudinaryassets/image/upload/v1633593799/logo-header_qh37fo.svg)

### Giới thiệu

---

Đồ án công nghệ phần mềm **PBL6**.
Đại học Bách Khoa - Đại học Đà Nẵng.
Các thành viên:
1. Trần Ngọc Huy
2. Nguyễn Kim Huy
3. Trần Diệp Phương
4. Trần Vũ Minh Triết

Đăng ký tài khoản đặt chỗ [tại đây](https://github.com/truongduchuy910/PBL6).

> "Trích dẫn của ai đó"
`;

export default function Markdown({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="64px" maxW="full" px="8px">
      <Field>{content}</Field>
      <Box w="100%"></Box>
    </Container>
  );
}
