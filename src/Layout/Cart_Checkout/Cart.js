import { Box, Heading, Image,
    Table,
    Thead,
    Tbody,
    Text,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    Flex,
    Select,
    Spacer,
    useBreakpointValue} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import React from 'react'
import { Divider } from '@material-ui/core';

export default function Cart() {
    const {item}=useSelector(state => state.cart)
    const tableBreak=useBreakpointValue({base:'sm',lg:'md'})
    return (
        <Box>
            <Box display={{md:'flex'}} mt={5} bg="white">
                <Box p={5} mr={3} width={{base:'100%',md:'65%'}}>
                    <Heading as="h3" size="2xl" my={3}>Items For Checkout</Heading>
                    <Box bg="cyan.400">
                        {[...Array(item)].map(val=>{
                            return(
                                <Flex bg="gray.200" p={5}>
                                    <Image boxSize="150px" src="#"/>
                                    <Spacer/>
                                    <Box p={3} >
                                        <Text fontSize={["lg","xl","2xl"]} fontWeight="bold">Rs 1233</Text>
                                        <Text mt={4} fontSize={["md","lg","xl"]}>Title of the Item</Text>

                                    </Box>
                                </Flex>
                            )
                        })}
                    </Box>
                </Box>
                <Divider orientation="vertical" width="1px" bg="gray.700" h="200px" my="5%"/>
                <Box p={5} width={{base:'100%',md:'30%'}}>
                    <Heading as="h3" size="lg" mt={3}>Total</Heading>
                    <Box>
                        <Table variant="simple" colorScheme="teal" size={tableBreak}  >
                            <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Tbody>
                                <Tr>
                                    <Td><Text fontWeight="bold"  my={1}>Sub-Total</Text></Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td><Text fontWeight="bold" my={1}>Dicounts/Offers</Text></Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td><Text fontWeight="bold" my={1}>Delivery Charges</Text></Td> 
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th><Text fontWeight="bold" fontSize="lg" my={2}>Total Amount</Text></Th>
                                    <Th isNumeric fontSize="lg">233</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                        <Button colorScheme="green" w="90%" ml="5%" my={2}>Checkout</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
