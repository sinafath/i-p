// import { Button as DefualtButton } from "@chakra-ui/react";

import DefualtButton from "@/app/_shares/Button";
import type { ButtonProps } from "@chakra-ui/react";

const Button = (props: ButtonProps) => (
  <DefualtButton
    border="2rem solid rgba(0, 0, 0, 0.09)"
    backdrop-filter="blur(12px)"
    mr="auto"
    bg="none"
    fontSize={{ base: 13, md: 19 }}
    fontWeight={600}
    color="dark"
    lineHeight={20}
    {...props}
  />
);

export default Button;
