import { HStack, Icon } from "@chakra-ui/react";
import { AiFillWindows, AiFillApple, AiFillAndroid } from "react-icons/ai";
import {
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsGlobe,
} from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import { Platform } from "../services/game-service";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: AiFillWindows,
    mac: AiFillApple,
    android: AiFillAndroid,
    playstation: BsPlaystation,
    xbox: BsXbox,
    nintendo: BsNintendoSwitch,
    linux: FaLinux,
    web: BsGlobe,
  };

  return (
    <HStack pb={2}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
