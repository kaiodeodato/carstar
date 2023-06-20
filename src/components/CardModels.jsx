import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";



export default function CardModels({ image, name, model, value, transmission, fuel}) {
  return (
    <div className='flex flex-col items-center justify-center  '>
  
        <div className='hover:scale-95 transition duration-300 shadow-lg hover:shadow-md' >
        <div className='w-80 h-56 overflow-hidden'>
            <img className='object-cover w-full h-full'  src={image} alt="car" />
        </div>
        
          <div className='p-5 flex flex-col border-2 w-80 h-68'>

            <div className='flex flex-row items-center justify-between '>
              <div className='flex flex-col  text-start'>
                <h1 className='text-2xl font-bold text-slate-700'>{name} {model}</h1>
                <div className='flex fles«x-row text-yellow-400'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  </div>
              </div>
              <div className='flex flex-col text-end'>
                <h1 className='text-2xl font-bold '>${value}</h1>
                <span>per day</span>
              </div>
            </div>

            <div className='flex flex-row items-center justify-between mt-6'>

              <div className='flex flex-row items-center text-start'>
                <FaCarSide size={22}/>
                <span className='ml-2 text-slate-500'>{name}</span>
              </div>

              <div className='flex flex-row items-center text-end'>
                <span className='mr-2 text-slate-500'>4/5</span>
                <FaCarSide size={22}/>
              </div>

            </div>

            <div className='flex flex-row items-center justify-between mt-6'>

              <div className='flex flex-row items-center text-start'>
                <FaCarSide size={22}/>
                <span className='ml-2 text-slate-500'>{transmission}</span>
              </div>

              <div className='flex flex-row items-center text-end'>
                <span className='mr-2 text-slate-500'>{fuel}</span>
                <FaCarSide size={22}/>
              </div>

            </div>

            <a 
              href='/carstar'
              className="mt-4 cursor-pointer rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-red-500 text-slate-100 hover:text-red-500 hover:bg-slate-200 
                md:p-2 p-3"
              
              >
              <div className="flex-col items-start md:flex">
                  <span className="text-lg  font-bold">Book Ride</span>
    
              </div>
              </a>

            

          </div> 
        </div>

    </div>
  )
}
