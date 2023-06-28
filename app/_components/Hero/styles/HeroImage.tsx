import { Image } from "@chakra-ui/next-js";
import type { ImageProps } from "@chakra-ui/next-js";
const HeroImage = (props: ImageProps) => (
  <Image
    ms="auto"
    {...props}
    h="auto"
    alt={props.alt}
  />
);
export default HeroImage;
