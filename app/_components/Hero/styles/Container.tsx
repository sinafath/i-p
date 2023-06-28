import ContainerDefault from "@/app/_shares/container";
import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

const Container = (props: BoxProps) => (
  <ContainerDefault
    pt={{ base: 111, md: 104 }}
    minH="100vh"
    display="flex"
    gap={54}
    alignItems="center"
    flexDirection={{ base: "column", md: "row" }}
    px={{ base: 8, md: 0 }}
    {...props}
  />
);

export default Container;
