import { Link, Links, HamburgerImage } from "./styles";

import dataHeader from "./data";
const { links, hamburgerIcon } = dataHeader;

function Menu() {
  return (
    <>
      <Links>
        {links.map(({ name }) => (
          <Link href="./" key={name}>
            {name}
          </Link>
        ))}
      </Links>
      <HamburgerImage {...hamburgerIcon} alt={hamburgerIcon.alt} />
    </>
  );
}
export default Menu;
