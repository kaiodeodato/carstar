import React from 'react'

export default function CardQuick({icon, title, content}) {
  return (
    <div className='flex flex-col mx-10 items-center justify-center'>
        <span className='bg-slate-100 rounded-full shadow-lg p-5 text-red-500'>{icon}</span>
        <h1 className='mt-4 text-2xl'>{title}</h1>
        <span className='mt-3 text-center text-slate-400'>{content}</span>
    </div>
  )
}
