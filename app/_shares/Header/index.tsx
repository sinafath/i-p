import { DefaultHeader, Button, LogoImage, Container } from "./styles"

import dataHeader from "./data";
const { headerIcon, installButton } = dataHeader;

import Menu from "./menu";

function Header() {
  return (
    <Container>
      <DefaultHeader>
        <Menu />
        <LogoImage {...headerIcon} alt={headerIcon.alt} />
        <Button>{installButton}</Button>
      </DefaultHeader>
    </Container>
  );
}

export default Header;
