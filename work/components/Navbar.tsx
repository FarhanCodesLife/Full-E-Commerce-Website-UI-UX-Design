import React from 'react'

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





    <div className='w-full flex flex-col items-center px-5 lg:px-10 sm:w-full sm:py-4 py-2 justify-between bg-slate-400'>
       <div className='  sm:flex-nowrap  flex-wrap flex justify-between items-center w-full'>
        <div className='font-bold items-center sm:w-full flex w-96 justify-between  '>
                <a className='text-xl sm:text-lg cursor-pointer'>
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
            <a href="">Sigup</a>
    </div>
        <div className='flex gap-4 items-center px-2 w-full  m-auto '> 
            <input type="search" className='sm:w-full border w-96   px-4 bg-transparent' />
            {/* <p className=''>search </p> */}
            <p>cart </p>
            <p>dil </p>
        </div>

       </div>
        <input type="search" className='px-2  hidden  block ' />
        
        
        </div>
    </>
  )
}

export default Navbar