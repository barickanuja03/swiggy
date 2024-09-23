import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
function Bestplace() {
    const bestresturant = [
        'Banglore',
        'Pune',
        'Mumbai',
        'Delhi',
        'Hyderabad',
        'Kolkata',
        'Chennai',
        'Chandigarh',
        'Ahemadabad',
        'Jaipur',
        'Nagpur',
      ];
  return (
    <>
      <div className='main-container'>
         <div className='heading'>
         Best Places to Eat Across Cities
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
        bestresturant .map((resturant) => (
          <button
            key={resturant}
            className="bg-white text-lg hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
          >
           Best Resturants in {resturant} 
          </button>
        ))}
        <button className="bg-white text-lg hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Show More<FaAngleDown className='inline'/>
        </button>
      </div>
      </div>
    </>
  )
}

export default Bestplace
