import React from 'react'
import ProductTab from '../../components/Products/ProductTab'
import ProductHeading from '../../components/Products/ProductHeading'
import ImageDisplay from '../../components/Products/ProductimagePicker'
// import GalleryPics from '../Gallery/Gallery'
import CustomBreadCrumb from '../../components/Blocks/CustomBreadCrumb'
import {Box, Stack, Flex, Button, Link, Icon,
    Heading,
    Spacer,
    Divider,
    Center,
    useBreakpointValue} from '@chakra-ui/react'
import './Products.scss'
import { useHistory} from 'react-router-dom';
import FeaturedBox from '../DisplayCards/FeaturedBox'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'


export default function SingleProduct() {

    const history=useHistory();
    const variant = useBreakpointValue({ base: "md", md: "lg",lg:"xl" });
    const myRoutes=history.location.pathname.split("/").filter(x=>x);
    return (
        <Box p={[2,3,4,5]} minH="200vh" bg="gray.100">
            
            {/** This is the breadcrumb header here*/}
            <Flex  mb={2} alignItems="flex-start">
                <CustomBreadCrumb routes={myRoutes} fontSize={{base:"xs",md:"sm",lg:"md"}} seperator={FaChevronRight}/>    
                <Spacer/>
                <Link variant="outline" fontSize={{base:"xs",md:"sm",lg:"md"}} colorScheme="cyan" ><Icon as={FaChevronLeft} mr={2} mb={1}/>Prev Item</Link>
                    <Divider orientation="vertical" mx={2} border="1px solid" opacity="1" borderColor="gray.500"/>
                <Link variant="outline" fontSize="md"  colorScheme="cyan" >Next Item<Icon as={FaChevronRight} ml={2} mb={1}/></Link>
            </Flex>

            {/** Images and about product here] */}
            <Stack direction={{base:"column",lg:"row"}} flexBasis={1} fontSize="md" position='relative'  minHeight={{lg:"60vh"}}>
                <Box flexGrow={1}>
                    <ImageDisplay/>
                </Box>
                <Box height="100vh" bg="gray.100" flexGrow={2}>
                <ProductHeading  bg="gray.50" />
                <Center>
                    <Heading as="h4" size={variant} my={5}>About This Product</Heading>
                </Center> 
                    <ProductTab/>
                </Box>    
            </Stack>

            {/** Other contents for user engangement */}
            <FeaturedBox title="Bought Together"/>
            
            
        </Box>
    )
}
