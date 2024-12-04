import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
  return (
    <>
    <div className=' w-full flex flex-wrap md:flex-nowrap items-center px-4 py-2 justify-between bg-black text-white'>
        <div className='w-full text-center items-center text-sm md:text-md'>

            Summer sell for all Swim suit and free expess Delivery - 50% OFF <span className='text-red-600 px-3 underline cursor-pointer' >ShopNow</span> 
            </div>
            <div>
                <span className=' cursor-pointer text-center hidden md:block px-10 py-1 '>English </span>
                </div>
            </div>





    <div className='w-full flex flex-col items-center px-5 lg:px-5 sm:w-full sm:py-4 py-2 justify-between bg--400'>
       <div className='  sm:flex-nowrap  flex-wrap flex justify-between items-center w-full'>
        <div className='font-bold items-center sm:w-full flex w-96 justify-between  '>
                <a className='text-xl sm:text-lg px-5 cursor-pointer'>
                farhan hanif  
                </a>
        <a className='md:hidden sm:text-sm text-lg  block'>
            manu
        </a>
        </div>
        <div className='lg:flex px-2 space-x-10 content-center w-full items-center justify-center hidden md:block'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contect</a>
            <a href="">Signup</a>
    </div>
        <div className='flex justify-end items-center  px-5 w-full space-x-4  m-auto '> 
            <div className=' flex items-center px-5 border  rounded-lg '>

            <input type="search" className='sm:w-full  space-x-2 py-2   text-black  border-transparent focus:border-transparent' placeholder='What are You Loking For ? ' /><IoIosSearch/>
            </div>
            <p className='text-xl cursor-pointer'><FaRegHeart />
            </p>
            <p className='text-xl cursor-pointer'><IoCartSharp />
            </p>
        </div>

       </div>
        
        
        </div>
    </>
  )
}

export default Navbar