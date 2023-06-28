import { Link as ChakraLink } from "@chakra-ui/next-js";
import { Flex, FlexProps, List } from "@chakra-ui/react";

import type { LinkProps } from "@chakra-ui/next-js";

const Link = (props: LinkProps) => <ChakraLink fontSize={19} {...props} />;

const Links = (props: FlexProps) => (
  <Flex
    display={{ base: "none", md: "flex" }}
    ml="auto"
    alignItems="center"
    gap={83}
    {...props}
  />
);

export { Link, Links };
