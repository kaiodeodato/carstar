import React from 'react'

export default function CardWhy({icon, title, content}) {
    return (
        <div className='flex flex-row items-center justify-center'>
            <span className='flex items-center justify-center bg-slate-100 rounded-full shadow-lg p-5 text-red-500 mr-5 ml-2 md:ml-0'>{icon}</span>
            <div className='p-2 md:p-0 md:w-96'>
              <h1 className='mt-2 text-2xl'>{title}</h1>
              <span className='mt-2 text-center text-slate-400'>{content}</span>
            </div>
        </div>
      )
    }
    