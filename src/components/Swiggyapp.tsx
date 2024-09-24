import React from 'react'

function Swiggyapp() {
  return (
    <>
    <div className='bg-slate-200'>
      <div className='main-container'>
        <div className='flex flex-col md:flex-row justify-evenly items-center p-10'>
         <div className='text-3xl font-bold capitalize'> 
            For better experience,download the Swiggy app now
         </div>
         <div className='flex flex-row flex-wrap justify-center md:justify-center  lg:justify-center items-center  gap-y-5 md:gap-2  '>
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png'className='w-[45%] md:w-[45%] lg:w-[45%] h-[50px] inline' />
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png' className='w-[45%] md:w-[45%] lg:w-[45%] h-[50px]'/>
         </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Swiggyapp
