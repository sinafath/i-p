"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import RtlProvider from "./RTlProvider";

export default function Chakra({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <RtlProvider>{children}</RtlProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
