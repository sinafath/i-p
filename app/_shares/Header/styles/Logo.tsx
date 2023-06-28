import { Image } from "@chakra-ui/next-js";
import type { ImageProps } from "@chakra-ui/next-js";
const LogoImage = (props: ImageProps) => (
  <Image
    {...props}
    alt={props.alt}
    w={{ base: 29, md: 58 }}
    mx="auto"
    ms={{ base: 23,md:"auto" }}
    h={{ base: 24, md: 48 }}
  />
);
export default LogoImage;
