import React from 'react'
import {Box, Flex,Heading , Text,Icon,Link} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'
import {FaAddressBook, FaSchool} from 'react-icons/fa'
import './Sidebar.scss';
export default function UserCard({title,icon, route, ...props}) {
    return (
        <Link as={NavLink}  py={5}
        width="90%"
        color="gray.500"
        to={route}
        borderRadius="4px"
        _activeLink={{bg:"green.100",color:"gray.400"}}
        _hover={{color:"gren.300",transform:"scale(1.02)"}}
        
        {...props}

        >
            <Flex alignItems="center" justifyContent="flex-start" ml={10}>
                <Icon as={icon} color="white"  boxSize="1.2em" mr={3}/>
                <Text fontSize="lg">{title}</Text>
            </Flex>
        </Link>
    )
}

UserCard.defaultProps={
    title:"Dashboard",
    icon:FaAddressBook

}