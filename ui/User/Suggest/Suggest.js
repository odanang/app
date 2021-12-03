import React, { useState } from "react";
import { HStack, VStack, Box, Image, Text, Divider } from "native-base";
import {
  RelationshipCreateButton,
  RelationshipDeleteDelete,
} from "../../Relationship";
import Controller from "./Controller";
import { Link } from "@react-navigation/native";


function UI({ loading, error, friendsSuggest, count, refetch }) {
  
  return (
    <VStack w="100%">
      <Box w="full" mt="20px" mb="8px" px="0.5%">
        <Text fontSize="18px" fontWeight="600" color="gray.700">
          Những người bạn có thể biết
        </Text>
      </Box>

      <HStack
        maxW="100%"
        mx="auto"
        w="100%"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {friendsSuggest.map((user) => (
          <VStack
            key={user.id}
            p="12px"
            minW={["49%", "32%", "24%"]}
            m="0.5%"
            space={["4px", "6px"]}
            alignItems="center"
            borderWidth="1px"
            borderColor="gray.100"
            rounded="8px"
          >
            <Box>
              <Link to={{ screen: "users", params: { id: user.id } }}>
                <Image
                  source={{
                    // uri:
                    //   user?.avatar?.publicUrl &&
                    //   "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/190312313_2943016239348813_282704590362946930_n_pc3vbb.jpg",
                    uri:
                      "https://odanang.net" +
                      (user?.avatar?.publicUrl || "/upload/img/no-image.png"),
                  }}
                  alt={user.name}
                  size="80px"
                  mx="auto"
                  mt="8px"
                  rounded="100"
                />
              </Link>
            </Box>
            <Link to={{ screen: "users", params: { id: user.id } }}>
              <Text fontWeight="600" color="gray.700">
                {user.name}
              </Text>
            </Link>
            <RelationshipCreateButton toId={user.id} page={'SF'} />
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
export default function UserListSuggest(props) {
  return <Controller {...props} UI={UI} />;
}
