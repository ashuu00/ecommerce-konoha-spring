import React from 'react'
import {Flex,Menu,MenuButton,Button,MenuList,MenuItem, Icon, useDisclosure, Box, PopoverArrow} from '@chakra-ui/react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
 import {useHistory,Link} from 'react-router-dom'

//Depraciated, create custom dropdown in scss
export default function DesktopNav() {
    const { isOpen,onClose, onOpen } = useDisclosure();
    const { isOpen:plantOpen,onClose:plantClose , onOpen:plantOpened} = useDisclosure();
    const { isOpen:gardenOpen,onClose:gardenClose , onOpen:gardenOpened} = useDisclosure();
    const { isOpen:serviceOpen,onClose:serviceClose , onOpen:serviceOpened} = useDisclosure();
    const history=useHistory();
    const CustomButton=({children,...props})=>{
        return(
        <Box>
            <Button className="flexItem" bg="green.100" 
                
                 _hover={{bg:"teal.400",color:"white"}} _active={{bg:"teal.400",color:"white"}} 
                 color="gray.700" {...props}>
                {children}
            </Button>
        </Box>)
    }
    return (
        <Flex justify="space-around"  >
                <CustomButton   onClick={()=>history.push('/cart')}>
                    Cart
                </CustomButton>
            
            <Box onMouseLeave={onClose}><Menu isOpen={isOpen} onClose={onClose}>
                <MenuButton as={Button} className="flexItem drop" bg="green.100" _expanded={{bg:"teal.400",color:"white"}} _active={{bg:"teal.400",color:"white"}} _hover={{bg:"teal.400",color:"white"}} color="gray.700" onMouseOver={onOpen}
                rightIcon={<Icon as={ArrowDropDownIcon}/>} 
                onTouchStart={onOpen}>
                    Plants 
                </MenuButton>
                <MenuList mt={-2} className="menu-list">
                    <MenuItem as={Link} to="/products">Create a Copy</MenuItem>
                    <MenuItem as={Link} to="/products">Mark as Draft</MenuItem>
                    <MenuItem as={Link} to="/products">Delete</MenuItem>
                    <MenuItem as={Link} to="/products">Attend a Workshop</MenuItem> 
                </MenuList>
            </Menu></Box>
             <Box onMouseLeave={plantClose}> <Menu isOpen={plantOpen} onClose={plantClose}>
                <MenuButton bg="green.100"  onTouchStart={plantOpened}
                _expanded={{bg:"teal.400",color:"white"}} _hover={{bg:"teal.400",color:"white"}} color="gray.700" as={Button} className="flexItem" onMouseOver={plantOpened} rightIcon={<Icon as={ArrowDropDownIcon}/>}>
                    Pots and Planters
                </MenuButton>
                <MenuList mt={-2} className="menu-list" >
                    <MenuItem >Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem> 
                </MenuList>
            </Menu></Box>
            <Box onMouseLeave={gardenClose}><Menu isOpen={gardenOpen} onClose={gardenClose}>
                <MenuButton as={Button} className="flexItem" bg="green.100" _expanded={{bg:"teal.400",color:"white"}} _hover={{bg:"teal.400",color:"white"}} color="gray.700" rightIcon={<Icon as={ArrowDropDownIcon}/>}
                onMouseOver={gardenOpened} onTouchStart={gardenOpened}>
                    Garden Accessories
                </MenuButton>
                <MenuList mt={-2} className="menu-list">
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem> 
                </MenuList>
            </Menu></Box>
            <Menu>
                <CustomButton onClick={()=>history.push('/blogs')}>
                    Blogs
                </CustomButton>
            </Menu>
            <Box onMouseLeave={serviceClose}><Menu isOpen={serviceOpen} onClose={serviceClose}>
                <MenuButton as={Button} className="flexItem" bg="green.100" _expanded={{bg:"teal.400",color:"white"}} _hover={{bg:"teal.400",color:"white"}} color="gray.700" rightIcon={<Icon as={ArrowDropDownIcon}/>}
                onMouseOver={serviceOpened} onClick={serviceOpened}>
                    Services
                </MenuButton>
                
                <MenuList mt={-2} className="menu-list">
                    <MenuItem as={Link} to="/user/history">Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem> 
                </MenuList>
            </Menu></Box>
            <Menu>   
                <CustomButton>
                Cart
                </CustomButton>
            </Menu> 
      </Flex>      
    )
}
