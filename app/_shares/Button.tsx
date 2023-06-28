import { Button as ChacraButton } from "@chakra-ui/react";

import type { ButtonProps } from "@chakra-ui/react";

function Button(props: ButtonProps) {
  return (
    <ChacraButton
      bg="none"
      h="auto"
      display="inline-flex"
      px={{ base: 12, md: 28 }}
      py={{ base: 4, md: 10 }}
      color="#463E80"
      borderRadius={90}
      justifyContent="center"
      alignItems="center"
      {...props}
    />
  );
}
export default Button;
