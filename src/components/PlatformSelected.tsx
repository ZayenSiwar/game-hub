import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import { useGameQueryStore } from "../store";


const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(s=> s.gameQuery.platformId)
const setSelectPlatform = useGameQueryStore(s=> s.setPlatformId)

  const { data, error } = usePlatforms();
const selectPlatform = usePlatform(selectedPlatformId)
  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem onClick={() => setSelectPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
