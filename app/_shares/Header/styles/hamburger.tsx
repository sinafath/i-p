import { Image } from "@chakra-ui/next-js";
import type { ImageProps } from "@chakra-ui/next-js";
const HamburgerImage = (props: ImageProps) => (
  <Image {...props} alt={props.alt} display={{ base: "initial", md: "none" }} />
);
export default HamburgerImage;
