import { extendTheme } from "@chakra-ui/react";

const numbers = [...Array.from(Array(200).keys())].reduce(
  (a, number) => ({ ...a, [number + 1]: `${number + 1}rem` }),
  {}
);


const breakpoints = {
  sm: "750px",
  md: "1340px",
  lg: "1350px",
  xl: "1920px",
};

// example theme
const theme = extendTheme({
  colors: {
    dark: '#1C1B1E',
  },
  fonts: {
    heading: 'var(--font-YekanBakh-fa-num--bold)',
    body: 'var(--font-YekanBakh-fa-num--regular)',
    mono: 'var(--font-YekanBakh-fa-num--regular)',
  },
  breakpoints,
  sizes:numbers,
  space: numbers,
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        fontSize: "Max(1px,.050vw)",
      },
    },
  },
  lineHeights: numbers,
  fontSizes: numbers,
});

export default theme;
