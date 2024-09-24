import React from 'react'
import { MdOutlineStarHalf } from "react-icons/md";
function Onlinefood() {
    const foods = [
        {
          id: 1,
         image:'https://tse1.mm.bing.net/th?id=OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8&pid=Api&P=0&h=180',
         name:'priya',
         Rating:'4.4',
         time:'30-40 min',
         address:
            'Indian, Chinese, Continental,Biryani, Fast',
        },
        {
          id: 2,
          image:'https://tse4.mm.bing.net/th?id=OIP.wALz0aaNBv8_dVhBlvpfyQHaE8&pid=Api&P=0&h=180',
          name:'burger king',
         Rating:'4.4',
         time:'30-40 min',
         address:'Indian, Chinese, Continental, Biryani, Fast Food Nayapalli',
        },
        {
            id: 3,
            image:'https://tse4.mm.bing.net/th?id=OIP.YrQVMRajVDyraxge1NiLVAHaFa&pid=Api&P=0&h=180',
            name:'WOW momo',
           Rating:'4.4',
           time:'30-40 min',
           address:'Indian, Chinese, Continental, Biryani, Fast Food Nayapalli',
        },
        {
            id: 4,
            image:'https://tse3.mm.bing.net/th?id=OIP.YqIyW41tE5USXnkJUomcvgHaE8&pid=Api&P=0&h=180',
            name:'UBQ by barbeque',
           Rating:'4.2',
           time:'30-40 min',
           address:'North Indian, Barbecue, Biryani, Kebabs, Mughlai',
          },
          {
            id: 5,
            image:'https://tse4.mm.bing.net/th?id=OIP.ZAiDxXmCs9ahqB46DEaqHQHaFj&pid=Api&P=0&h=180',
            name:'Hotel surprise',
           Rating:'4.1',
           time:'10-15 min',
           address:'North Indian, Biryani, Chinese, Tandoor Unit 4',
          },
          {
            id: 6,
            image:'https://tse3.mm.bing.net/th?id=OIP.NXy0yP1I8EaprW1auqbJVgHaEJ&pid=Api&P=0&h=180',
            name:'Hotel chaelie',
           Rating:'4.2',
           time:'20-25 min',
           address:'ndian, Chinese Kharabela Nagar',
          },
          {
            id: 7,
            image:'https://tse2.mm.bing.net/th?id=OIP.mS3l2zzowk8PoyHWQc4Q_wHaFj&pid=Api&P=0&h=180',
            name:"adi's dhaba",
           Rating:'4.3',
           time:'40-45 min',
           address:'Indian Kharabela Nagar',
          },
          {
          id: 8,
          image:'https://tse3.mm.bing.net/th?id=OIP.RsjfACSqDr6ur-T09PvJHgHaE7&pid=Api&P=0&h=180',
          name:'dum suffer biriyani',
         Rating:'4.3',
         time:'30-40 min',
         address:'Biryani, Kebabs, Tandoor, Indian, Desserts 3PELX MALL',
          },
          {
            id: 9,
            image:'https://tse2.mm.bing.net/th?id=OIP.xHo6BNY0XmjOercIVmt-gAHaE8&pid=Api&P=0&h=180',
            name:'venus inn resturant',
           Rating:'4.5',
           time:'30-40 min',
           address:'South Indian, Indian Bapuji Nagar',
            },
            {
                id: 10,
                image:'https://tse2.mm.bing.net/th?id=OIP._oHog33ltI7AOCmAVM-PPgHaE7&pid=Api&P=0&h=180',
                name:'Fast Food',
               Rating:'4.9',
               time:'20-25 min',
               address:'Indian, Chinese, Biryani, Oriya Unit 4',
                },
                {
                 id:11,
                 image:'https://tse2.mm.bing.net/th?id=OIP.mS8P7uXCl-cG5T6EHyJcxAHaD9&pid=Api&P=0&h=180',
                 name:"Pino's piza",
                Rating:'4.4',
                time:'30-40 min',
                address:'Pizzas, Pastas, Italian, Desserts, Beverages BHAWANI MALL',
                },
    {
     id: 12,
     image:'https://tse1.mm.bing.net/th?id=OIP.tSjuy7DC-8dEbT6kUjoXPgHaFj&pid=Api&P=0&h=180',
     name:'pizza hut',
    Rating:'4.4',
    time:'30-40 min',
    address:'Pizzas Sahid Nagar',
     },
  {
    id: 13,
    image:'https://tse4.mm.bing.net/th?id=OIP.ZBaKV5J0Vq32slhmLiz7awHaFk&pid=Api&P=0&h=180',
    name:'KFC',
   Rating:'4.8',
   time:'30-40 min',
   address:'Burgers, Fast Food, Rolls & Wraps Kharabela Nagar',
    },
    {
        id: 14,
        image:'https://tse1.mm.bing.net/th?id=OIP.HSL6M8Grjm0kW_BvxT1HTAHaJZ&pid=Api&P=0&h=180',
        name:'greenchillyz',
       Rating:'4.9',
       time:'20-25 min',
       address:'Indian, Chinese, Tandoor, Biryani Ashok Nagar',
        },
        {
            id: 15,
           image:'https://tse2.mm.bing.net/th?id=OIP.mS8P7uXCl-cG5T6EHyJcxAHaD9&pid=Api&P=0&h=180',
           name:"pin's pizza",
          Rating:'4.4',
          time:'30-40 min',
          address:'Indian, Chinese, Continental, Biryani, Fast Food Nayapalli',
         },
         {
          id: 16,
          image:'https://tse2.mm.bing.net/th?id=OIP._oHog33ltI7AOCmAVM-PPgHaE7&pid=Api&P=0&h=180',
          name:'Fast Food',
          Rating:'4.4',
          time:'30-40 min',
          address:'Indian, Chinese, Continental, Biryani, Fast Food Nayapalli',
         },
         {
          id: 17,
          image:'https://tse3.mm.bing.net/th?id=OIP.YqIyW41tE5USXnkJUomcvgHaE8&pid=Api&P=0&h=180',
          name:'UBQ by barbeque',
         Rating:'4.2',
         time:'30-40 min',
         address:'North Indian, Barbecue, Biryani, Kebabs, Mughlai',
        },
        {
          id: 18,
          image:'https://tse4.mm.bing.net/th?id=OIP.ZAiDxXmCs9ahqB46DEaqHQHaFj&pid=Api&P=0&h=180',
          name:'Hotel surprise',
         Rating:'4.1',
         time:'10-15 min',
         address:'North Indian, Biryani, Chinese, Tandoor Unit 4',
        },
        {
          id: 19,
          image:'https://tse3.mm.bing.net/th?id=OIP.NXy0yP1I8EaprW1auqbJVgHaEJ&pid=Api&P=0&h=180',
          name:'Hotel chaelie',
         Rating:'4.2',
         time:'20-25 min',
         address:'ndian, Chinese Kharabela Nagar',
        },
        {
          id: 20,
          image:'https://tse2.mm.bing.net/th?id=OIP.mS3l2zzowk8PoyHWQc4Q_wHaFj&pid=Api&P=0&h=180',
          name:"adi's dhaba",
         Rating:'4.3',
         time:'40-45 min',
         address:'Indian Kharabela Nagar',
        },
        {
          id: 21,
         image:'https://tse1.mm.bing.net/th?id=OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8&pid=Api&P=0&h=180',
         name:'priya',
         Rating:'4.4',
         time:'30-40 min',
         address:
            'Indian, Chinese, Continental,Biryani, Fast',
        },
        {
          id: 22,
          image:'https://tse4.mm.bing.net/th?id=OIP.wALz0aaNBv8_dVhBlvpfyQHaE8&pid=Api&P=0&h=180',
          name:'burger king',
         Rating:'4.4',
         time:'30-40 min',
         address:'Indian, Chinese, Continental, Biryani, Fast Food Nayapalli',
        },
        {
            id: 23,
            image:'https://tse4.mm.bing.net/th?id=OIP.YrQVMRajVDyraxge1NiLVAHaFa&pid=Api&P=0&h=180',
            name:'WOW momo',
           Rating:'4.4',
           time:'30-40 min',
           address:'Indian, Chinese, Continental, Biryani, Fast Food Nayapalli',
        },
        {
            id: 24,
            image:'https://tse3.mm.bing.net/th?id=OIP.YqIyW41tE5USXnkJUomcvgHaE8&pid=Api&P=0&h=180',
            name:'UBQ by barbeque',
           Rating:'4.2',
           time:'30-40 min',
           address:'North Indian, Barbecue, Biryani, Kebabs, Mughlai',
          },
          {
            id: 25,
            image:'https://tse4.mm.bing.net/th?id=OIP.ZAiDxXmCs9ahqB46DEaqHQHaFj&pid=Api&P=0&h=180',
            name:'Hotel surprise',
           Rating:'4.1',
           time:'10-15 min',
           address:'North Indian, Biryani, Chinese, Tandoor Unit 4',
          },
          {
            id: 26,
            image:'https://tse3.mm.bing.net/th?id=OIP.NXy0yP1I8EaprW1auqbJVgHaEJ&pid=Api&P=0&h=180',
            name:'Hotel chaelie',
           Rating:'4.2',
           time:'20-25 min',
           address:'ndian, Chinese Kharabela Nagar',
          },
          {
            id: 27,
            image:'https://tse2.mm.bing.net/th?id=OIP.mS3l2zzowk8PoyHWQc4Q_wHaFj&pid=Api&P=0&h=180',
            name:"adi's dhaba",
           Rating:'4.3',
           time:'40-45 min',
           address:'Indian Kharabela Nagar',
          },
          {
          id: 28,
          image:'https://tse3.mm.bing.net/th?id=OIP.RsjfACSqDr6ur-T09PvJHgHaE7&pid=Api&P=0&h=180',
          name:'dum suffer biriyani',
         Rating:'4.3',
         time:'30-40 min',
         address:'Biryani, Kebabs, Tandoor, Indian, Desserts 3PELX MALL',
          },
      ];
  return (
    <>
      <div className='main-container'>
        <div className='heading'>
        Restaurants with online food delivery in Bhubaneswar
        </div>
        <div>
           {
            <div className="flex flex-row justify-center md:justify-evenly items-center flex-wrap mt-10">
            {
             foods.map((food) =>{
                return(
                   <div key={food.id} className='w-full md:w-[30%] lg:w-[24%] aspect-square my-5 rounded-xl shadow-lg shadow-black/15 hover:scale-95 transition-all'>
                    <div className='flex flex-col justify-start py-3'>
                       <div>
                        <img src={food.image} className='w-full aspect-video object-cover  rounded-2xl'/>
                       </div>
                       <div className='px-3'>
                        <h2 className='text-xl font-bold capitalize'>
                            {food.name}
                        </h2>
                       <div className='flex flex-row justify-start gap-4 text-lg font-medium'>
                         <div><MdOutlineStarHalf className='text-green-600 text-2xl inline'/>{food.Rating}</div>
                         <div>{food.time}</div>
                       </div>
                        <div className='text-base text-black/60 overflow-hidden'>
                            {food.address}
                        </div>
                       </div>
                    </div>
                   </div>
                );
              })
            }
          </div>
           }
        </div>
      </div>
    </>
  )
}

export default Onlinefood
