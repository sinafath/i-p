import { VStack } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";

const RightBox = (props: StackProps) => (
  <VStack
    w={{ base: "100%", md: "625rem" }}
    alignItems={{ base: "center", md: "start" }}
    textAlign={{ base: "center", md: "start" }}
    {...props}
  />
);

export default RightBox;
