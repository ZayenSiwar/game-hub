import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import UsePlatforms from '../hooks/usePlatforms'

const PlatformSelected = () => {
    const{data,error} = UsePlatforms();
    if(error) return null;
  return (

      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
        <MenuList>
        {data.map(platform =><MenuItem>key={platform.id}{platform.name}</MenuItem>)}
            <MenuItem></MenuItem>
        </MenuList>
      </Menu>
    
  )
}

export default PlatformSelected
