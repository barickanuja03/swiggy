import React from 'react'
import { MdOutlineStarHalf } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Resturantchain() {
    var settings = {
        dots: false,
        infinite: false,
        arrows:false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
     <div className="main-container">
        <div className="heading">
        Top restaurant chains in Bhubaneswar
        </div>
       <div>
       <div className="slider-container">
       <Slider {...settings}>
       <div>
        <div className='flex flex-col justify-start py-3'>
              <div>
               <img src="https://tse1.mm.bing.net/th?id=OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8&pid=Api&P=0&h=180" className='w-full aspect-video object-cover  rounded-2xl'/>
              </div>
              <div className='px-3'>
               <h2 className='text-xl font-bold capitalize'>
                  Priya
               </h2>
              <div className='flex flex-row justify-start gap-4 text-lg font-medium'>
                <div><MdOutlineStarHalf className='text-green-600 text-2xl inline'/>4.1</div>
                <div>30-40min</div>
              </div>
               <div className='text-base text-black/60 overflow-hidden'>
               Indian, Chinese, Continental,Biryani, Fast
               </div>
              </div>
           </div>
        </div>
        <div>
          <div className='flex flex-col justify-start py-3 mx-3'>
              <div>
               <img src="https://tse1.mm.bing.net/th?id=OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8&pid=Api&P=0&h=180" className='w-full aspect-video object-cover  rounded-2xl'/>
              </div>
              <div className='px-3'>
               <h2 className='text-xl font-bold capitalize'>
                  Priya
               </h2>
              <div className='flex flex-row justify-start gap-4 text-lg font-medium'>
                <div><MdOutlineStarHalf className='text-green-600 text-2xl inline'/>4.1</div>
                <div>30-40min</div>
              </div>
               <div className='text-base text-black/60 overflow-hidden'>
               Indian, Chinese, Continental,Biryani, Fast
               </div>
              </div>
           </div>
        </div>
        <div>
          <div className='flex flex-col justify-start py-3 mx-3'>
              <div>
               <img src="https://tse1.mm.bing.net/th?id=OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8&pid=Api&P=0&h=180" className='w-full aspect-video object-cover  rounded-2xl'/>
              </div>
              <div className='px-3'>
               <h2 className='text-xl font-bold capitalize'>
                  Priya
               </h2>
              <div className='flex flex-row justify-start gap-4 text-lg font-medium'>
                <div><MdOutlineStarHalf className='text-green-600 text-2xl inline'/>4.1</div>
                <div>30-40min</div>
              </div>
               <div className='text-base text-black/60 overflow-hidden'>
               Indian, Chinese, Continental,Biryani, Fast
               </div>
              </div>
           </div>
        </div>
        <div>
          <div className='flex flex-col justify-start py-3 mx-3'>
              <div>
               <img src="https://tse1.mm.bing.net/th?id=OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8&pid=Api&P=0&h=180" className='w-full aspect-video object-cover  rounded-2xl'/>
              </div>
              <div className='px-3'>
               <h2 className='text-xl font-bold capitalize'>
                  Priya
               </h2>
              <div className='flex flex-row justify-start gap-4 text-lg font-medium'>
                <div><MdOutlineStarHalf className='text-green-600 text-2xl inline'/>4.1</div>
                <div>30-40min</div>
              </div>
               <div className='text-base text-black/60 overflow-hidden'>
               Indian, Chinese, Continental,Biryani, Fast
               </div>
              </div>
           </div>
        </div>
        <div>
          <div className='flex flex-col justify-start py-3 mx-3'>
              <div>
               <img src="https://tse1.mm.bing.net/th?id=OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8&pid=Api&P=0&h=180" className='w-full aspect-video object-cover  rounded-2xl'/>
              </div>
              <div className='px-3'>
               <h2 className='text-xl font-bold capitalize'>
                  Priya
               </h2>
              <div className='flex flex-row justify-start gap-4 text-lg font-medium'>
                <div><MdOutlineStarHalf className='text-green-600 text-2xl inline'/>4.1</div>
                <div>30-40min</div>
              </div>
               <div className='text-base text-black/60 overflow-hidden'>
               Indian, Chinese, Continental,Biryani, Fast
               </div>
              </div>
           </div>
        </div>
        </Slider>
        </div>
      </div>
     </div> 
    </>
  )
}

export default Resturantchain
