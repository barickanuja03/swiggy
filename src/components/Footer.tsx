import React from 'react'
import { SiSwiggy } from "react-icons/si";
function Footer() {
  return (
    <>
    <div className="bg-black w-full max-h-max text-white">
     <div className='main-container '>
        <div className='flex justify-around flex-row  flex-wrap gap-11 py-11'>
            <div>
              <h1 className='text-2xl tracking-tighter font-extrabold capitalize'>
                 <SiSwiggy className='inline'/>Swiggy
              </h1>
              <div>
                &copy; 2024 Bundl Technologies Pvt. Ltd
              </div>
            </div>
            <div>
                <div className='text-xl font-bold capitalize'>
                    Company
                </div>
                <ul className='text-base text-white/80 text-start'>
                    <li><a href='#' className='hover:text-red-800'>About</a></li>
                    <li><a href='#' className='hover:text-red-800'>Careers</a></li>
                    <li><a href='#' className='hover:text-red-800'>Team</a></li>
                    <li><a href='#' className='hover:text-red-800'>Swiggy one</a></li>
                    <li><a href='#' className='hover:text-red-800'>Swiggy Instamart</a></li>
                    <li><a href='#' className='hover:text-red-800'>Swiggy Genie</a></li>
                </ul>
            </div>
            <div>
               <div className='text-xl font-bold capitalize'>
                    Contact Us
                </div>
                <ul className='text-base text-white/80 text-start capitalize'>
                    <li><a href='#'  className='hover:text-red-800'>Help & Support</a></li>
                    <li><a href='#'  className='hover:text-red-800'>Partner with us</a></li>
                    <li><a href='#'  className='hover:text-red-800'>Ride With Us</a></li>
                </ul>
                <div className='text-xl font-bold capitalize mt-8'>
                   Legal
                </div>
                <ul className='text-base text-white/80 text-start'>
                    <li><a href='#' className='hover:text-red-800'>Terms & Condition</a></li>
                    <li><a href='#' className='hover:text-red-800'>Cookie policy</a></li>
                    <li><a href='#' className='hover:text-red-800'>Privacy policy</a></li>
                    <li><a href='#' className='hover:text-red-800'>Investor Policy</a></li>
                </ul>
            </div>
            <div>
            <div className='text-xl font-bold capitalize'>
                    We Deliver to:
                </div>
                <ul className='text-base text-white/80 text-start'>
                    <li><a href='#'>Banglore</a></li>
                    <li><a href='#'>Gurgaon</a></li>
                    <li><a href='#'>Hyderabad</a></li>
                    <li><a href='#'>Delhi</a></li>
                    <li><a href='#'>Mumbai</a></li>
                    <li><a href='#'>Pune</a></li>
                </ul>
            </div>
        </div>
     </div> 
    </div>
    </>
  )
}

export default Footer
