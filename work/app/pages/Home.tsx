import Image from 'next/image';
import React from 'react';
import mainimage from '../assets/Frame 560.png';

const Home = () => {
  return (
    <>
      <div className="w-full bg-slate-300 flex flex-col lg:flex-row justify-center border-t-2 lg:space-x-10">
        {/* Left Sidebar */}
        <div className="lg:px-10 lg:pt-8 lg:border-r-2">
          <div className="w-full flex items-center space-x-7 p-2 overflow-auto justify-between lg:space-y-3 lg:w-[217px] lg:h-[344px] lg:p-5 bg-orange-500 border">
            <p className='font-bold  '>WomenFashion</p>
            <p className='font-bold '>Electronics</p>
            <p className='font-bold '>Home&Lifestyle</p>
            <p className='font-bold '>Medicine</p>
            <p className='font-bold '>Sports&Outdoor</p>
            <p className='font-bold '>Babies&Toys</p>
            <p className='font-bold '>Groceries&Pets</p>
            <p className='font-bold '>Health&Beauty</p>
          </div>
        </div>

        {/* Main Image Section */}
        <div className="pt-8 lg:px-6 flex justify-center items-center">
          <div className="w-full lg:w-[892px] h-[200px] sm:h-[344px] lg:h-[344px] bg-orange-500 flex justify-center items-center">
            <Image
              className="m-auto object-contain"
              src={mainimage}
              alt="Main Display"
              width={892}
              height={344}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
