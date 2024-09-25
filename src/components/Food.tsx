import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Food() {
    const foods = [
        {
          id: 1,
         image:'https://tse4.mm.bing.net/th?id=OIP.tlcWGrGvBWmKwTXhHxUV9QHaE8&pid=Api&P=0&h=180',
         name:'Dosa',
        },
        {
          id: 2,
          image:'https://tse2.mm.bing.net/th?id=OIP.wBu0Xsb774mtzvjhq1C3DgHaE8&pid=Api&P=0&h=180',
          name: 'biriyani',
        },
        {
          id: 3,
          image:'https://tse2.mm.bing.net/th?id=OIP.h8pKqvjulrxJ7Hr18ZuSIgAAAA&pid=Api&P=0&h=180',
          name: 'Idli',
        },
        {
            id:4,
            image:'https://tse4.mm.bing.net/th?id=OIP.8yXqbA_ft0ackWk1SLMv6QHaE8&pid=Api&P=0&h=180',
            name: 'paratha',
          },
          {
            id:5,
            image:'https://tse4.mm.bing.net/th?id=OIP.atiyDeMcp2s86Tt957xlGAHaHb&pid=Api&P=0&h=180',
            name: 'upma',
          },
          {
            id:6,
            image:'https://tse3.mm.bing.net/th?id=OIP.nx-FXFvHzvurUrzZqWA-jQHaHa&pid=Api&P=0&h=180',
            name:'poori',
          },
          {
            id:7,
            image:'https://tse3.mm.bing.net/th?id=OIP.bNavq7JeqsHHPHsULdhZFAHaFj&pid=Api&P=0&h=180',
            name:'chole bhature',
          },
          {
            id: 8,
           image:'https://tse4.mm.bing.net/th?id=OIP.tlcWGrGvBWmKwTXhHxUV9QHaE8&pid=Api&P=0&h=180',
           name:'Dosa',
          },
          {
            id: 9,
            image:'https://tse2.mm.bing.net/th?id=OIP.wBu0Xsb774mtzvjhq1C3DgHaE8&pid=Api&P=0&h=180',
            name: 'biriyani',
          },
          {
            id: 10,
            image:'https://tse2.mm.bing.net/th?id=OIP.h8pKqvjulrxJ7Hr18ZuSIgAAAA&pid=Api&P=0&h=180',
            name: 'Idli',
          },
      ];
      var settings = {
        dots: false,
        infinite: false,
        arrows:false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll:1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
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
     <div className='main-container mt-16'>
        <div className='heading'>
            whats on your mind?
        </div>

        <div className='py-8'>
        {
          // <div className="flex flex-row justify-center md:justify-evenly items-center gap-x-7 gap-y-5 flex-wrap py-10">
             <div className="slider-container">
             <Slider {...settings}>
          {
           foods.map((food) =>{
              return(
                 <div key={food.id}>
                  <div className="max-w-max mx-20 lg:mx-0">
                    <img src={food.image} className='rounded-full w-36 aspect-square'/>
                    <h2 className="text-xl text-wrap font-bold text-center ">{food.name}</h2>
                  </div>
                 </div>
              );
            })
          }
        </Slider>
        </div>
        // </div>
        }
      </div>   
      <hr className='bg-slate-100 h-1'/>
     </div> 
    </>
  )
}

export default Food
