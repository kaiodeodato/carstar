import React from 'react'
import { AiFillPhone} from 'react-icons/ai';

export default function BlackStripePhone() {
  return (
    <div className='w-screen h-28 lg:h-48 flex flex-col md:flex-row items-center justify-center bg-slate-900 text-slate-100 m-auto'>
        <h1 className='text-xl md:text-3xl font-bold text-center '>
Book a car by getting in touch with us</h1>

        <div className='flex flex-row items-center justify-content text-red-500 mx-28'>
            <span className='hidden lg:block'>
                <AiFillPhone size={30}/>
            </span>
            <h1 className='text-base md:text-3xl font-bold text-center '>(123) 456-7869</h1>
        </div>
       
    </div>
  )
}
