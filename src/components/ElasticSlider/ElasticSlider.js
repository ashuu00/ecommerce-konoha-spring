import React from 'react'
import Carousel from 'react-elastic-carousel'
import './ElasticSlider.scss'
export default function ElasticSlider({children,classCarousel,...props}) {
    return (
        
            <Carousel {...props}>
                {children}
            </Carousel>
    )
}
