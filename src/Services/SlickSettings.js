import { FaSlash } from "react-icons/fa";

export const slickRecommend={
    
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        swipeToSlide:true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1294,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: false
            }
          },
          {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            arrows:false,
            dots:false
          }
        }
          
      ]
     
}

export const slickFeatured={
    
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  swipeToSlide:true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1294,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
    breakpoint: 950,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      arrows:false
    }
  },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0
      }
    }
    
     
  ]

}

export const slideBlogs={
    
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide:true,
  arrows: false,
  responsive: [
    
    {
    breakpoint: 950,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
     
    }
  },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0
      }
    }
    
     
  ]

}

export const slideSingleProduct={
  
    dots: true,
    dotsClass: "slick-thumb slick-dots",
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1
  
};