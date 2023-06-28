import { Heading } from "@chakra-ui/react";
import type { HeadingProps } from "@chakra-ui/react";

const H1 = (props: HeadingProps) => (
  <Heading
    as="h1"
    fontSize={{ base: 28, md: 56 }}
    fontWeight={800}
    lineHeight={{ base: 44, md: 96 }}
    letterSpacing={{ base: "-1.68px", md: ".84px" }}
    text-align={{ base: "right", md: "center" }}
    {...props}
  />
);

export default H1;
