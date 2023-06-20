import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";



export default function CarsTeam({ image, name, activity }) {
  return (
    <div className='flex flex-col items-center justify-center  '>
  
        <div className='hover:scale-95 transition duration-300 shadow-lg hover:shadow-md' >
        <div className='w-80 h-auto overflow-hidden'>
            <img className='object-cover w-full h-full'  src={image} alt="car" />
        </div>
        <div className='h-28 flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold text-slate-600'>{name}</h1>
            <span className='text-slate-400'>{activity}</span>
        </div>

        </div>

    </div>
  )
}
