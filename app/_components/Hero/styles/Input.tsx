import { Input as ChakraInput, Box } from "@chakra-ui/react";
import type { InputProps, BoxProps } from "@chakra-ui/react";
import { forwardRef } from "react";
const InputWrapper = (props: BoxProps) => (
  <Box
    p={1}
    bgGradient="linear(to-r, #463E80,#9F97D9)"
    borderRadius={100}
    {...props}
    w="100%"

    height={{ base: 36, md: 50 }}
  />
);
const Input = forwardRef((props: InputProps, ref) => (
  <ChakraInput
    ref={ref}
    display="flex"
    w={{ base: "100%", sm: 363 }}
    flex={1}
    paddingX={24}
    paddingY={16}
    height={{ base: 34, md: 48 }}
    fontSize={{ base: 13, md: 16 }}
    _placeholder={{ color: "#777777", fontSize: 16 }}
    borderRadius={100}
    border="none"
    alignItems="center"
    background="#f5d4ce"
    {...props}
  />
));
export { InputWrapper };
export default Input;
