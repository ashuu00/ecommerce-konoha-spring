import { Box,Button,Center,Text } from '@chakra-ui/react'
import {Grid} from '@material-ui/core'
import React from 'react'
import CardDisplay from './SwipeCards'
import './DisplayCards.scss'


export default function Recommend() {
    return (
        <Box p={[1,2,4]} my={{base:"1.5em",md:"2em"}}  w={{base:"100%",md:"95%"}} bg="teal.100" 
        borderRadius="3xl" boxShadow="lg" >
            <Grid container alignItems="flex-start"  justify="center" p={2}>
                <Grid item sm={12} md={4} >
                    <Text fontSize={["2xl","3xl","3xl","4xl"]} mt={{lg:"2em"}}mb={{base:"0.5em"}} color="gray.600">
                    "The quick brown fox jumps over the lazy dog"
                    </Text>
                    <Text fontSize={["lg","xl","2xl","3xl"]} mb={{base:"1em"}} color="gray.600">
                    "Have this lorwem ipsuim generator"
                    </Text>
                    <Center>
                        <Button fontSize={{base:"sm",md:"md",lg:"2xl"}} colorScheme="blue" _hover={{boxShadow:"2xl",transform:"scale(1.05)"}}>Shop Now</Button>
                    </Center>
                </Grid>
                <Grid item  xs={12} sm={12} md={8} className="recommend">
                   <CardDisplay/>
                </Grid>
            </Grid>
        </Box>
    )
}
