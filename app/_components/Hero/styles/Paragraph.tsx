import { Text } from "@chakra-ui/react";
import type { TextProps } from "@chakra-ui/react";

const Paragraph = (props: TextProps) => (
  <Text
    color="#282828"
    fontSize={{ base: 15, md: 24 }}
    fontWeight="300"
    lineHeight={{ base: 24, md: 44 }}
    letterSpacing="-0.96px"
    {...props}
  />
);

export default Paragraph;
