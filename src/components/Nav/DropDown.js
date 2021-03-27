import React from 'react'
import {Box,MenuButton,Menu,MenuList,MenuItem,useDisclosure,Button,Icon} from '@chakra-ui/react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
export default function DropDown({items,label}) {
    const itemArr=[]
    for (const item of items) {
        itemArr.push(<MenuItem as={Link} to={item.route}>{item.label}</MenuItem>);
    }
    const { isOpen,onClose:close, onOpen} = useDisclosure();
    return (
        <Box onMouseLeave={close}>
            <Menu  onClose={close} isOpen={isOpen}>
                <MenuButton as={Button} className="flexItem drop" bg="green.100" _expanded={{bg:"teal.400",color:"white"}} _hover={{bg:"teal.400",color:"white",textDecoration:'none'}} color="gray.700" onMouseOver={onOpen}
                rightIcon={<Icon as={ArrowDropDownIcon}/>} >
                   {label}
                </MenuButton>
                <MenuList mt={-2} className="menu-list"> 
                    {itemArr}
                </MenuList>
            </Menu>
        </Box>
    )
}
