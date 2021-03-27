import React from 'react'
import SlickTemplate from '../Cards/SlickTemplate';
import {slideSingleProduct} from '../../Services/SlickSettings'
import { Box,Button,Image } from '@chakra-ui/react';


export default function ProductimagePicker() {
    // slideSingleProduct={
  
    //     dots: true,
    //     dotsClass: "slick-thumb slick-dots",
    //     infinite: true,
    //     speed: 500,
    //     arrows:false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
      
    // }

    const imageArr=['https://picsum.photos/id/1/400/300',
                    'https://picsum.photos/id/2/400/300',
                    'https://picsum.photos/id/3/400/300']
    
    return (
        <Box maxWidth="700px" maxHeight="500px" className="imageDisplay">
            <SlickTemplate settings={{...slideSingleProduct,customPaging:thumbnailFunc}}>
                <div>
                    <Image src='https://picsum.photos/id/1/400/300'/>
                </div>
                <div>
                    <Image src='https://picsum.photos/id/2/400/300'/>
                </div>
                <div>
                    <Image src='https://picsum.photos/id/3/400/300'/>
                </div>
            </SlickTemplate>
        </Box>
    )
}
