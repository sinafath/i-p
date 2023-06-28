// import { Button as DefualtButton } from "@chakra-ui/react";

import DefualtButton from "@/app/_shares/Button";
import type { ButtonProps } from "@chakra-ui/react";

const Button = (props: ButtonProps) => (
  <DefualtButton
    display="flex"
    fontSize={{ base: 13, md: 19 }}
    fontWeight={600}
    lineHeight={28}
    colorScheme='purple'
    w={{ base: 68, md: 120 }}
    color="#FFE0C8"
    
    justifyContent="center"
    borderRadius={90}
    background="#463E80"
    letterSpacing="-0.76px"
    {...props}
  />
);

export default Button;
