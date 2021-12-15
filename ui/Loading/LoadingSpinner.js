import React from "react";
import { VStack, Spinner } from "native-base";

const LoadingSpinner = () => {
  return (
    <VStack w="100%" alignItems="center" mt="10">
      <Spinner color="green.500" size="lg" />
    </VStack>
  );
};

export default LoadingSpinner;
