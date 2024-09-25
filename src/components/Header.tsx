"use client"
import React from 'react'
import { SiSwiggy } from "react-icons/si";
import  { useState } from 'react'
import Link from 'next/link';
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuBadgePercent } from "react-icons/lu";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
function Header() {
   const [isClick,setisclick] = useState(false);
const toggleNavbar = () :void =>
{
  setisclick(!isClick)
}
  return (
    <>
    <div className="bg-slate-50 fixed z-50 top-0 w-full h-[4rem] mb-5">
     <div className="main-container">
        <div className="flex flex-row justify-between items-center">
         <div>
            <h1 className='text-5xl tracking-tighter font-extrabold text-red-800 capitalize'>
               <SiSwiggy className='inline'/>
            </h1>
         </div>
         <div className='hidden md:block'>
           <ul className='flex flex-row justify-around items-center gap-11'>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-black/50 hover:text-red-800'>
                <MdOutlineIndeterminateCheckBox className='inline mr-2'/>Swiggy Corporate
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-black/50 hover:text-red-800'>
                  <CiSearch className='inline mr-2 text-2xl' />Search
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-black/50 hover:text-red-800'>
                <LuBadgePercent className='inline mr-2'/>Offer
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-black/50 hover:text-red-800'>
                <IoHelpBuoyOutline className='inline mr-2'/>Help
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-black/50 hover:text-red-800'>
                <IoPersonAddSharp className='inline mr-2'/>SignIn
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-black/50 hover:text-red-800'>
                <FaCartArrowDown className='inline mr-2'/>Cart
                </a>
            </li>
           </ul>
         </div>
         <div className='md:hidden flex items-center ease-in-out duration-300'>
              <button className='inline-flex items-center justify-center p-2 rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ease-in-out duration-300
              ' onClick={toggleNavbar}>
                {isClick ? (
                 <svg
                 className='h-6 w-6'
                 xmlns='https://www.w3.org/2000/svg'
                 fill='none'
                 viewBox='0 0 24 24'
                 stroke='currentcolor' 
                 >
                  <path 
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6L12 12'
                  />
                 </svg>
                ) : (
                  <svg
                  className='h-6 w-6'
                  xmlns='https://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentcolor'
                  >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6H16M4 12H16m-7 6H7'
                    />
                  </svg>
                )}
              </button>
             </div>
        </div>
        {isClick && (
              <div className='md:hidden bg-black/80'>
               <div className='w-[100%] h-auto'>
               <ul className='flex flex-col justify-around items-center gap-y-2'>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-slate-100 hover:text-red-800'>
                <MdOutlineIndeterminateCheckBox className='inline mr-2'/>Swiggy Corporate
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-slate-100 hover:text-red-800'>
                  <CiSearch className='inline mr-2 text-2xl' />Search
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-slate-100 hover:text-red-800'>
                <LuBadgePercent className='inline mr-2'/>Offer
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-slate-100 hover:text-red-800'>
                <IoHelpBuoyOutline className='inline mr-2'/>Help
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-slate-100 hover:text-red-800'>
                <IoPersonAddSharp className='inline mr-2'/>SignIn
                </a>
            </li>
             <li>
                <a href='#' className='text-lg tracking-tighter font-semibold text-slate-100 hover:text-red-800'>
                <FaCartArrowDown className='inline mr-2'/>Cart
                </a>
            </li>
           </ul>
               </div>
               </div>
             )}
     </div> 
    </div>
    </>
  )
}

export default Header
