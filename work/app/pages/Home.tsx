import Image from 'next/image';
import React from 'react';
import mainimage from '../assets/Frame 560.png';
import Sales from './Sales';

const Home = () => {
  return (
    <>
      <div className="w-full  flex flex-col lg:flex-row justify-center border-t-2 lg:space-x-10">
        <div className="px-4 pt-4 lg:px-10 lg:pt-8 lg:border-r-2">
          <div className="w-full flex lg:block overflow-x-auto whitespace-nowrap lg:whitespace-normal 
                         lg:space-y-3 lg:w-[217px] lg:h-[344px] lg:p-5 border">
            <p className='font-bold px-4 py-2 lg:px-0 lg:py-0'>WomenFashion</p>
            <p className='font-bold px-4 py-2 lg:px-0 lg:py-0'>Electronics</p>
            <p className='font-bold px-4 py-2 lg:px-0 lg:py-0'>Home&Lifestyle</p>
            <p className='font-bold px-4 py-2 lg:px-0 lg:py-0'>Medicine</p>
            <p className='font-bold px-4 py-2 lg:px-0 lg:py-0'>Sports&Outdoor</p>
            <p className='font-bold px-4 py-2 lg:px-0 lg:py-0'>Babies&Toys</p>
            <p className='font-bold px-4 py-2 lg:px-0 lg:py-0'>Groceries&Pets</p>
            <p className='font-bold px-4 py-2 lg:px-0 lg:py-0'>Health&Beauty</p>
          </div>
        </div>

        <div className="px-4 pt-4 lg:pt-8 lg:px-6 flex justify-center items-center">
          <div className="w-full lg:w-[892px] h-[200px] sm:h-[344px] lg:h-[344px] flex justify-center items-center">
            <Image
              className="w-full h-full object-contain"
              src={mainimage}
              alt="Main Display"
              width={892}
              height={344}
            />
          </div>
        </div>
      </div>
      <Sales/>
    </>
  );
};

export default Home;
