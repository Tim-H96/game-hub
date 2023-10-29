import { Box, Button, List, ListIcon, ListItem } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

interface Props {
  onClick: (filter: string) => void;
}

const LeftPane = ({ onClick }: Props) => {
  return (
    <List>
      <ListItem fontSize={"lg"}>New Releases</ListItem>
      <ListItem>
        <Button variant="ghost" name="last30" onClick={() => onClick("last30")}>
          <ListIcon as={AiFillStar} w={"xsm"} />
          Last 30 Days
        </Button>
      </ListItem>
    </List>
  );
};

export default LeftPane;
