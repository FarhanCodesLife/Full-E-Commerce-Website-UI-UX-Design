import React from 'react'

const Sales = () => {
  return (
    <>
      <div className='container mx-auto px-4 lg:px-20 my-5 lg:my-10'>
        <div className='w-full flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0'>
          <div className='space-y-3 w-full'>
            <div className='text-sm md:text-base'>Todays</div>
            
            <div className='w-full font-bold flex  sm:flex-row justify-between items-center gap-4'>
              <div className='w-full sm:w-1/2 flex  sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 items-center'>
                <h1 className='text-md md:text-2xl lg:text-3xl font-bold'>Flash Sales</h1>
                <h1 className='text-md md:text-2xl lg:text-3xl font-bold'>00 : 23 : 19 : 53</h1>
              </div>

              <div className=' sm:w-1/2  bg-slate-300 flex justify-center sm:justify-end space-x-5 items-center p-2'>
                <h1>left</h1>
                <h1>left</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='p-2 h-[350px] w-full bg-black overflow-x-auto flex space-x-5'>
          {[...Array(8)].map((_, index) => (
            <div key={index} className='flex-shrink-0 bg-red-400 w-[270px] h-full'></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sales