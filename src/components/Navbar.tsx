import React from 'react'

function Navbar() {
  return (
    <>
        <div className='flex flex-row md:justify-start gap-[10px] flex-wrap justify-center'>
          <div className='border-2 border-slate-300 rounded-full max-w-max px-2 py-1'>
           <a href='#'>Filter </a> 
          </div>
          <div className='border-2 border-slate-300 rounded-full max-w-max px-2 py-1'>
          <a href='#'> Sort By</a>
          </div>
          <div className='border-2 border-slate-300 rounded-full max-w-max px-2 py-1'>
           <a href='#'>Fast Delivery</a>
          </div>
          <div className='border-2 border-slate-300 rounded-full max-w-max px-2 py-1'>
           <a href='#'>New on Swiggy</a>
          </div>
          <div className='border-2 border-slate-300 rounded-full max-w-max px-2 py-1'>
           <a href='#'>Rating 4.0+</a>
          </div>
          <div className='border-2 border-slate-300 rounded-full max-w-max px-2 py-1'>
           <a href='#'>Pure Veg</a>
          </div>
          <div className='border-2 border-slate-300 rounded-full max-w-max px-2 py-1'>
           <a href='#'>Offer</a>
          </div>
          <div className='border-2 border-slate-300 rounded-full max-w-max px-2 py-1'>
           <a href='#'>Rs. 300 to Rs. 600</a>
          </div>
          <div className='border-2 border-slate-300 rounded-full max-w-max px-2 py-1'>
           <a href='#'>Less than Rs.300</a>
          </div>
        </div>
    </>
  )
}

export default Navbar
