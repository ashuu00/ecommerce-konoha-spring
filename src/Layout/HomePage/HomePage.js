import React,{useState} from 'react'
import {Box,VStack, Image,AspectRatio} from '@chakra-ui/react'
import PicCard from '../DisplayCards/PicCard'
import FeatureBox from '../DisplayCards/FeaturedBox'
import Recommend from '../DisplayCards/Recommend'

import Carousel from '../../components/ElasticSlider/ElasticSlider';
export default function HomePage() {
    const [currBg,setBg]=useState('yellow')

    const bgCol=[
        'https://picsum.photos/id/212/720/1080',
        'https://picsum.photos/id/122/720/1080',
        'https://picsum.photos/id/345/720/1080',
        'https://picsum.photos/id/100/720/1080'
      ]
      
    
    
    return (
        <Box className="App"  >
      <Box className="carousel">
        <Carousel itemsToShow={1} 
        showArrows={false} 
        enableAutoPlay={true} 
        autoplaySpeed="2000">
          <AspectRatio w="100%" ratio={12/4} m={0}>
          <Image src={bgCol[0]} alt="naruto" objectFit="cover" />
          </AspectRatio>
          <AspectRatio w="100%" ratio={12/4}>
          <Image src={bgCol[1]} alt="naruto" objectFit="cover" />
          </AspectRatio>
          <AspectRatio w="100%" ratio={12/4}>
          <Image src={bgCol[2]} alt="naruto" objectFit="cover" />
          </AspectRatio>
        </Carousel>
      </Box>
      <VStack 
      spacing={{base:"12px",md:"26px",lg:"34px"}}
      algin="center">
        <Recommend/>
        <Recommend/>
        <PicCard/>
        <FeatureBox/>
      </VStack> 
     
    </Box>
    )
}
 