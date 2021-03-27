import React from 'react'
import {Box, Heading, Spacer,Button,Flex} from '@chakra-ui/react'
import Cards from './SwipeCards'
import { Divider } from '@material-ui/core'
import {slickFeatured} from '../../Services/SlickSettings'
export default function FeaturedBox({title}) {
    return (
        <Box px={[1,2,3]} pt={3} pb={[3,4,5]} my={{base:"1.5em",md:"2em"}}  w={{base:"100%",md:"98%"}} bg="green.100" >
            <Flex align="center">
                <Heading fontSize={{base:"xl",md:"2xl",lg:"3xl"}} m={4}>{title}</Heading>
                <Spacer/>
                <Box as={Button} color="whitesmoke" bg="cyan.400" boxShadow="md" _hover={{bg:"cyan.600", color:"white"}}>See All Items</Box>
            </Flex>
            <Divider/>
            <Cards settings={slickFeatured} />
        </Box>
    )
}

FeaturedBox.defaultProps={
    title:'This is our Product'
}