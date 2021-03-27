import React from 'react'
import {Box, Flex,Heading , Text,Icon,Link} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'
import {FaAddressBook, FaSchool} from 'react-icons/fa'
import './Sidebar.scss';
export default function Card({title,icon, route, ...props}) {
    return (
        <Link as={NavLink}  py={5}
        width="90%"
        color="white"
        to={route}
        borderRadius="4px"
        _activeLink={{bg:"green.400",color:"gray.100"}}
        _hover={{color:"gray.100",transform:"scale(1.02)"}}
        
        {...props}

        >
            <Flex alignItems="center" justifyContent="center">
                <Icon as={icon} color="white"  boxSize="1.2em" mr={3}/>
                <Text fontSize="xl">{title}</Text>
            </Flex>
        </Link>
    )
}

Card.defaultProps={
    title:"Dashboard",
    icon:FaAddressBook

}