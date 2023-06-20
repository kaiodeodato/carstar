import React from 'react'

import { FaThumbsUp} from "react-icons/fa";

export default function CardTestimonials({content, name, city, image}) {
  return (
    <div className='w-96 h-62 bg-slate-100 p-5  ' >
        <h1 className='text-xl mb-5 text-slate-600'>{content}</h1>
        <div className='flex flex-row items-center justify-between p-5'>
            <div className='flex flex-row items-center '>
                <div className='rounded-full w-20 h-20 overflow-hidden'>
                    <img className='w-full' src={image} alt="" />
                </div>

                <div className='ml-3'>
                    <h1 className='font-bold text-lg'>{name}</h1>
                    <span className='text-slate-600'>{city}</span>
                </div>
            </div>

            <div>
                <FaThumbsUp className='text-red-500' size={60} />
            </div>
        </div>

    </div>
  )
}
