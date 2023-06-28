import ContainerDefault from "@/app/_shares/container";
import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

const Container = (props: BoxProps) => (
  <ContainerDefault
    pos="absolute"
    top={0}
    w="100%"
    mt={{ base: 19, md: 56 }}
    px={{ base: 24, md: 120 }}
    mx={0}
    {...props}
  />
);

export default Container;
