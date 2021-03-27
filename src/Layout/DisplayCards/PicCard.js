import React from 'react'
import {Box, Center, Flex, SimpleGrid} from '@chakra-ui/react'
import './DisplayCards.scss'


export default function PicCard() {
    return(
    <Box w="100%">
   <SimpleGrid minChildWidth="160px" spacing={[3,4,5]} >
       <Box className="picCard" m={{base:"1px",md:"12px",lg:"20px"}} boxShadow="dark-lg" > </Box>
       <Box className="picCard" m={{base:"1px",md:"12px",lg:"20px"}} boxShadow="dark-lg" > </Box>
       <Box className="picCard" m={{base:"1px",md:"12px",lg:"20px"}} boxShadow="dark-lg" > </Box>
   </SimpleGrid>
   </Box>
   )
}
