import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {

   let data = [
      {
         title : "Up-Comming Sale",
         img : "public/assets/images/arrival-bg.jpg"
      },
      {
         title : "Diwali Dhamaka",
         img : "public/assets/images/slider-bg.jpg"
      },
      {
         title : "Black Friday Sale",
         img : "public/assets/images/slider-bg2.jpg"
      },
      {
         title : "Welcome",
         img : "public/assets/images/slider-bg3.jpg"
      },
      {
         title : "Latest Mobile",
         img : "public/assets/images/slider-bg4.jpg"
      }
   ]


  return (
   <div>
      <Carousel height={200} dynamicHeight={false} showThumbs={false}>
         {
            data.map(item=><InnerSliderBox slide={item} />)
         }
              

      </Carousel>
   </div>
  )
}

export default Slider


let InnerSliderBox = (props)=>{
   return(
      <div>
                    <img style={{height : "400px"}} src={props.slide.img} />
                    <p className="legend">{props.slide.title}</p>
                </div>
   )
}