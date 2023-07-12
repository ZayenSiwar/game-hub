import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { MenuItem } from '@chakra-ui/react'
const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
      order by : aze
    </MenuButton>
    <MenuList>
   
  <MenuItem>releavane</MenuItem>
  <MenuItem>date</MenuItem>
  <MenuItem>aqsss</MenuItem>
  <MenuItem>hhh</MenuItem>
  <MenuItem>lkio</MenuItem>
  <MenuItem>adbyr</MenuItem>  
    </MenuList>
  </Menu>

  )
}

export default SortSelector
