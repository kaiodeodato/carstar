import React from 'react'
import bannerTop from "../assets/heroes-bg.png";
import TestimonialsComponent from '../components/Testimonials'
import BlackStripePhone from '../components/BlackStripePhone';


export default function Testimonials() {
  return (
    <div className='text-slate-800  overflow-hidden flex flex-col m-auto'>
      <div className='container w-screen flew-wrap -z-10'>
        <img className='object-cover w-101 absolute left-0 h-80 -top-5 opacity-10 ' src={bannerTop} 
      alt="car" />
      </div>

      <div className='flex flex-col mt-14 z-20  '>
        <h1 className='text-4xl text-slate-600 ml-14'>Testimonials</h1>
        <div className=' z-20 ml-14'>
          <a className='mr-1 hover:text-red-500' href="/carstar">Home</a>/
          <span className='ml-1'>Testimonials</span>
        </div>

        <div className='mt-10 mb-10'>
        <TestimonialsComponent className=""/>
        <BlackStripePhone className=""/>
        </div>
      
      </div>

     
    
    </div>
  )
}
