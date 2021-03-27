import React from 'react'
import {Box, Center, Heading, Text} from '@chakra-ui/react'


export default function Checkout() {
    return (
        <Box>
            <Box h="200px" bg="gray.100" >Here we would how breadCrumb with green pipes</Box>
            <Box display={{md:'flex'}} p={5} mt={3} mx={5} justifyContent="space-around">
                <Box>
                    <Center>
                        <Heading as="h3" size="xl" my={3}>Checkout</Heading>
                    </Center>
                    <Text fontSize={["md","lg","xl"]}>Shipping Details</Text>
                    
                </Box>
            </Box>
        </Box>
    )
}
