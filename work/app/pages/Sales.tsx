import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const Sales = () => {
  return (
    <>

    
      <div className='container mx-auto px-4 lg:px-20 my-5 lg:my-10'>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full"
    >
        <div className='w-[90%]  flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0'>
          <div className='space-y-3 w-full'>
            <div className='text-sm md:text-base'>Todays</div>
            
            <div className='w-full  font-bold flex  sm:flex-row justify-between items-center gap-6'>
              <div className='w-full  flex  sm:flex-row sm:space-x-8 space-x-4 space-y-0 sm:space-y-0 items-center'>
                <h1 className='text-sm md:text-2xl bg-slate-3 lg:text-3xl font-bold'>Flash Sales</h1>
                <h1 className='text-sm md:text-2xl bg-slate00 lg:text-3xl font-bold'>00 : 23 : 19 : 53</h1>
              </div>
              <div className="sm:w-1/4 w-1/2 justify-center  space-x-5">

                <CarouselPrevious className="relative  " />
                <CarouselNext className="relative" />
              </div>

              
            </div>
          </div>
        </div>
{/* 
        <div className='p-2 h-[350px] w-full bg-black overflow-x-auto flex space-x-5'>
          {[...Array(8)].map((_, index) => (
            <div key={index} className='flex-shrink-0 bg-red-400 w-[270px] h-full'></div>
          ))}
        </div> */}

      
      <CarouselContent>
      {[...Array(8)].map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 px-5  lg:h-[350px]">
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center h-[340px] justify-center p-5 sm:p-3">
              
            <div key={index} className=' bg-red-400 w-full h-full p-5'></div>
                      </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>  
      </div>
    </>
  )
}

export default Sales