import React from 'react'
import {Box,VStack, StackDivider,Center, Heading} from '@chakra-ui/react'
import {FaAddressBook, FaSchool} from 'react-icons/fa'
import Card from '../../../components/Admin/Sidebar/Card'

export default function Sidebar(props) {
    return (
       <Box bg="gray.800" display="static" {...props} my={0} minH="100vh">
           <Center mt={5}>
                <Heading as="h3" fontSize="2xl" color="white">Konoha Admin</Heading>
            </Center>
                <StackDivider bg="white" mt={3} h="1px" width="80%" ml="10%"/>
            
            <VStack justifyContent="center"
            my={4}
            spacing={4}
            /*divider={<StackDivider bg="gray.700"/>}*/>
                <Card route="/admin/orders" title="Orders"/>
                <Card route="/admin/category" title="Categories"/>
                <Card route="/admin/product" title="Create Product"/>
                <Card route="/admin/blog-editor" title="Create Blog"/>
            </VStack>
           
       </Box>
    )
}
