
import header from '@/public/header.svg' 
import hamburgerIcon from '@/public/hamburgerIcon.svg' 

import { ImageProps } from '@chakra-ui/next-js';

const dataHeader = {
  links: [
    {
      name: "خانه",
    },
    {
      name: "درباره ما",
    },
    {
      name: "میزبان شوید",
    },
  ],
  installButton: "نصب خونگی",
  headerIcon: {
    ...header,
    alt:"آیکون"
  },
  hamburgerIcon: {
    ...hamburgerIcon,
    alt:"آیکون همبرگر"
  },
};

export default dataHeader;
