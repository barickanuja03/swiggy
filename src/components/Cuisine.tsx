import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
function Cuisine() {
    const cuisines = [
        'Chinese',
        'South Indian',
        'Indian',
        'Kerala',
        'Korean',
        'North Indian',
        'Seafood',
        'Bengali',
        'Punjabi',
        'Italian',
        'Andhra',
      ];
  return (
    <>
    <div className="main-container">
        <div className="heading">
        Best Cuisines Near Me
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            className="bg-white text-md hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            {cuisine} Restaurant Near Me
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

export default Cuisine
