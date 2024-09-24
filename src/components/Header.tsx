import React from 'react'
import { SiSwiggy } from "react-icons/si";
import Link from 'next/link';
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuBadgePercent } from "react-icons/lu";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
function Header() {
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
         <div>
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
        </div>
     </div> 
    </div>
    </>
  )
}

export default Header
