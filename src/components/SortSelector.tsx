import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { MenuItem } from '@chakra-ui/react'
interface Props{
    onSelectSortOrder:(SortOrders:string)=> void; 
    SortOrder:string;
}
const SortSelector = ({onSelectSortOrder ,SortOrder}:Props) => {
    const SortOrders=[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'name'},
        {value:'-release',label:'Release date'},
        {value:'-metacritic',label:'popularity'},
        {value:'-rating',label:'Average Rating'},
    ]
    const curresntSortOreder= SortOrders.find(order => order.value === SortOrder)
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
   order by : {curresntSortOreder?.label || 'relevance'}
    </MenuButton>
    <MenuList>
  {SortOrders.map(order=><MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}

    </MenuList>
  </Menu>

  )
}

export default SortSelector
