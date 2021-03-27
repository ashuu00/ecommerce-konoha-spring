import React from 'react'
import FilterSidebar from "../../components/Products/Filters/FilterSideBar";
import {Box, Flex, Link, Text, Image, Divider} from '@chakra-ui/react'
import CustomBreadCrumbs from '../../components/Blocks/CustomBreadCrumb'
import {useHistory} from 'react-router-dom'
import Card from '../../components/Cards/ProductCard'


export default function ProductsPage() {

    const history=useHistory();
    const paths=history.location.pathname.split("/").filter(x=>x);
    console.log(paths)

    return (
        <Flex>
            <FilterSidebar width={{md:"25%",lg:"20%"}}/>
            <Box width={{md:"75%",lg:"80%"}} mt={3}>
                <CustomBreadCrumbs  pl={5} routes={paths} />
                <Flex justify="space-between" alignItems="baseline"  px={5} mt={{base:3,md:4,lg:5}} w={{base:'100%',lg:'70%'}}>
                    <Link fontSize={['sm','sm','md','lg']}   fontWeight="bold"> Sort By:</Link>
                    <Link fontSize={['sm','sm','md','lg']}  fontWeight="semi-bold"> Price-- Low to High</Link>
                    <Link fontSize={['sm','sm','md','lg']}  fontWeight="semi-bold"> Price-- High to Low</Link>
                    <Link fontSize={['sm','sm','md','lg']}  fontWeight="semi-bold"> Newwest First</Link>
                </Flex>
                <Divider bg="gray.700" h="1px" width="95%" ml="2.5%" mt={2}/>
                <Flex wrap="wrap" justifyContent="space-around">
                    {[...Array(20)].map((val,idx)=>
                        <Card key={idx}/>
                    )}
                </Flex>
            </Box>
        </Flex>
    )
}
