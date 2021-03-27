import { Flex, Text,Box, Button, useBreakpointValue} from '@chakra-ui/react'
import React from 'react'
import Progress from '../StepProgress/OrderSteps'
export default function OrderDescription() {
    //const breakFlexGrow=useBreakpointValue({base:0,lg:1})
    return (
       <Flex flexDir={{base:"column",md:"row"}} justify="space-between">
           <Box p={5} >
               <Text fontSize={["lg","lg","xl","xl"]}>Delivery Address</Text>
               <Text mt={5} lineHeight={1.4} fontSize={{base:"md",md:"lg"}}>Ashutosh Anurag
               <br/> Dh-501, Abhimanyu APrartments <br/> Vasundhara Enclave</Text>
               <Text mt={3}>Phone No: <br/> 54949393</Text>
           </Box>
           <Box py={5} pr={5} flexGrow={3} ml={{xl:20}} >
            <Progress/>
           </Box>
           
           <Flex p={5}  justify="center">
               <Box>

                <Text fontSize={"xl"}  fontWeight="bold">
                    Delivered on : 12 Jan 2202
                    <br/> Rate and Review
                </Text>
                <Button mt={3} colorScheme="green">Order Online</Button>
               </Box>
           </Flex>
       </Flex>

    )
}
