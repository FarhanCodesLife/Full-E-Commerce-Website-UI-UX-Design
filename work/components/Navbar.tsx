import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='text-center w-full flex items-center px-4 py-2 justify-between bg-black text-white'>
        <div className='w-full'>
            Summer sell for all Swim suit and free expess Delivery - 50% OFF <span className='text-red-600 px-3 underline cursor-pointer' >ShopNow</span> </div>
            <div>
                <span className=' cursor-pointer   px-10 py-1 '>English </span>
                </div>
            </div>


    <div className='w-full flex items-center px-4 py-4 justify-between bg-slate-400'>
        <div>
            farhan hanif  
        </div>
        <div className='flex gap-9'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contect</a>
            <a href="">Sigup</a>
    </div>
        <div> 
            <input type="search" className='px-3 py-1' />
        </div>
        
        
        </div>
    </>
  )
}

export default Navbar