import { Box,Center,Heading,Text,VStack} from '@chakra-ui/react'
import React from 'react'

export default function BlogSlider() {
    return (
        <Box  minW="350px" className="slider-contain" mt={[2,4,8]}  >
            <Box className="blog-slider-card"/>
            <Box className="card-in-pic" boxShadow="xl">
                <VStack p={1} spacing="15px" >
                    <Center>
                        <Heading
                            as="h3"
                            textTransform="uppercase"
                            size="md"
                            className="blog-dates"
                            fontWeight="bold"
                            color="green.400"
                            >
                            Plants
                        </Heading>
                    </Center>
                    <Heading as="h2" mt={0.5} size="md" fontWeight="bold" lineHeight="95%">
                        Title for the Image for two lines
                    </Heading>
                    <Text
                        as="sam"
                        textTransform="uppercase"
                        fontSize={{base:"sm",md:"md",lg:"lg"}}
                        className="blog-dates"
                        fontWeight="semi-bold"
                        color="gray.400"
                        >
                        12 january, 2021
                    </Text>
                </VStack>
            </Box>
        </Box>
    )
}
