import React from 'react'
import StepProgress from './StepProgress'
import {Box,Flex, Text} from "@chakra-ui/react"

export default function OrderSteps() {
    return (
        <Box w="100%">
            <Box mx={3}>
            <StepProgress/>
            </Box>
            <Flex justify="space-between" mt={3}>
                <Text>Ordered</Text>
                <Text>Ordered</Text>
                <Text>Ordered</Text>
            </Flex>
        </Box>
    )
}
