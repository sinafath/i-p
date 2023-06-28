import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

const Container = (props: BoxProps) => (
  <Box mx={{base:16,md:120}} {...props}/>
);

export default Container;
