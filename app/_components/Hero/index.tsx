import Form from "./Form";
import {
  Container,
  H1,
  RightBox,
  Paragraph,
  HeroImage,
} from "./styles";
import { Box } from "@chakra-ui/react";

import dataHeader from "./data";
const { description, heading, heroImage } = dataHeader;


function Hero() {
  return (
    <Container>
      <RightBox>
        <H1>{heading}</H1>
        <Paragraph>{description}</Paragraph>
        <Form/>
      </RightBox>
      <Box flex={1}>
        <HeroImage {...heroImage} alt={heroImage.alt} />
      </Box>
    </Container>

    
  );
}

export default Hero;
