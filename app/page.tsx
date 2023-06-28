"use client";
import { Box, Text } from "@chakra-ui/react";
import Header from "./_shares/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <Box as="main" pos="relative" backgroundColor="#f5d4ce">
      <Header />
      <Hero/>
    </Box>
  );
}
