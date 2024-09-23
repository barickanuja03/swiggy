import React from 'react'

function Swiggyapp() {
  return (
    <>
      <div className='main-container'>
        <div className='flex flex-row justify-center '>
         <div className='text-3xl font-bold text-wrap'> 
            For better experience,download the Swiggy app now
         </div>
         <div className='flex flex-row flex-wrap justify-center gap-2'>
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png'className='w-[20%] aspect-video inline' />
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png' className='w-[20%]'/>
         </div>
        </div>
      </div>
    </>
  )
}

export default Swiggyapp
