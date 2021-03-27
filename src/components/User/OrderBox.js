import React from 'react'
import {Box,Image, Text,Flex, Spacer, Button, Icon, Progress } from "@chakra-ui/react"

export default function OrderBox({...props}) {
    return (
        <Flex p={5} mb={10} ml={{base:0,lg:"10%"}}
        {...props}
        flexDir={{base:'column',md:'row'}} 
        minH={{base:"100px",md:"200px"}} w={{base:"100%",lg:"80%"}} 
        border="2px solid #555" borderRadius="7px"
        _hover={{boxShadow:"lg",cursor:"pointer"}}>
                <Box w={{base:"100px",md:"200px"}}>
                    <Image h="100%" src="" alt="Image product" />
                </Box>
                <Box p={3} width={{base:"100%",md:"40%",lg:"20%"}}>
                    <Text isTruncated={true} fontSize="xl" fontWeight="bold">some gibbirish for the text to see truncation</Text>
                    <Text mt={4} color="gray.400">Qty: 3</Text>
                    <Text mt={3} color="gray.400">Seller: Narendra Modi</Text>
                </Box>
                <Spacer/>
                <Box p={3} width={{base:"100%",md:"20%",lg:"30%"}}>
                    <Text fontSize={"xl"}>Rs 12232</Text>
                </Box>
                <Box p={3} width={{base:"100%",md:"30%"}}>
                    <Text fontSize={"xl"} mb={4}>Delivered On 26 January.</Text>
                    <Text fontSize={"xl"} mb={4}>RATE AND REVIEW</Text>
                    <Button colorScheme="green" size="lg">Order Again</Button>
                </Box>
               
                
            </Flex>
    )
}
