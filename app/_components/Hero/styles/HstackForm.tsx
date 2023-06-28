import { HStack } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";


const HstackForm = (props: StackProps) => (
  <HStack as="form" pt={24} gap={8} w={{ base: "100%", sm: "auto" }} alignItems="start"  {...props} />
);

export default HstackForm;
