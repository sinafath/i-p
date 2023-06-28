import { Box, Grid } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

const Header = (props: BoxProps) => (
  <Grid
    templateColumns="repeat(3, 1fr)"
    as="header"
    display={{ base: "flex", md: "grid" }}
    alignItems="center"
    {...props}
  />
);

export default Header;
