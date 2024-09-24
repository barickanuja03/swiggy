import React from 'react'

function Explore() {
  return (
    <>
      <div className="main-container">
        <div className="heading">
        Explore Every Restaurants Near Me
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-11'>
          <div className='bg-white text-lg hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 rounded-lg shadow capitalize text-center w-full'>
            Explore resturants near me
          </div>
          <div className='bg-white text-lg hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 rounded-lg shadow capitalize text-center w-full'>
            Explore Top rated Resturants near me
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
