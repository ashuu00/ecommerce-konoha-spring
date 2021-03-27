import { Box} from '@chakra-ui/react'
import React from 'react'
import Card from '../../components/Cards/ProductCard'
import SlickTemplate from '../../components/Cards/SlickTemplate'
import {slickRecommend} from '../../Services/SlickSettings'

export default function SwipeCards({settings}) {
    return (
        <Box mx={{base:"0.5em", md:"1em"}}  mt={[1,1.5,2,3]}bg="gray.100" style={{zIndex:'0'}} 
        borderRadius="md">
            <SlickTemplate settings={settings?settings:slickRecommend}>
                
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                
            </SlickTemplate>
        </Box>
    )
}
