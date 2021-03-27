import React from "react";
import Slider from "react-slick";
import {Box} from '@chakra-ui/react'

export default function SlickTemplate({children,settings})  {
 
    
    return (
      <Box>
        <Slider {...settings} >
          {children}
        </Slider>
      </Box>
    );
}
