import { Grid,Box, GridItem,Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import BlogCard from '../../components/Blogs/BlogCards'
import BlogSlide from '../../components/Blogs/BlogSlider'
// import SlideTemplate from '../../components/Cards/SlickTemplate'
import Carousel from '../../components/ElasticSlider/ElasticSlider'
import {slideBlogs} from '../../Services/SlickSettings'
export default function Blogpage() {
    return (
        <div>
                <Carousel 
                itemsToShow={4}
                showArrows={false} 
                enableAutoPlay={true} 
                autoplaySpeed="300">
                     <BlogSlide/>
                     <BlogSlide/>
                     <BlogSlide/>
                     <BlogSlide/>
                     <BlogSlide/>
                     <BlogSlide/>        
                </Carousel>
            
            
            <Grid templateColumns="repeat(11,1fr)" gap={6} my={[5,7,9,12]}>
                <GridItem colSpan={{base:12,md:7}}>
                    <SimpleGrid columns={[1,2,2,3]}>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    </SimpleGrid>
                </GridItem>
                <GridItem colSpan={{base:12,md:4}}>
                    <Flex shrink="1" justify="center">
                    <BlogCard/>
                    </Flex>
                </GridItem>
            </Grid>
        </div>
    )
}
