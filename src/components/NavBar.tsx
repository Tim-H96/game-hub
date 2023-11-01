import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"8px"}>
      <Image src={logo} boxSize={"80px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
