import React from 'react'
import bannerTop from "../assets/heroes-bg.png";
import TestimonialsComponent from '../components/Testimonials'
import BlackStripePhone from '../components/BlackStripePhone';
import CardModels from '../components/CardModels';

export default function Models() {
  return (
    <div className='text-slate-800  overflow-hidden flex flex-col m-auto'>
      <div className='container w-screen flew-wrap -z-10'>
        <img className='object-cover w-101 absolute left-0 h-80 -top-5 opacity-10 ' src={bannerTop} 
      alt="car" />
      </div>

      <div className='flex flex-col mt-14 z-20  '>
        <h1 className='text-4xl text-slate-600 ml-14'>Models</h1>
        <div className=' z-20 ml-14'>
          <a className='mr-1 hover:text-red-500' href="/carstar">Home</a>/
          <span className='ml-1'>Models</span>
        </div>

        <div className='container mt-48 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto lg:pl-44 lg:pr-44'>
          <CardModels
            image='https://car-rental-ten.vercel.app/static/media/audi-box.b3263089022dd5e025dc.png'
            name='Audi'
            model='A1'
            value='45'
            transmission=' Manual'
            fuel='Diesel'
            />
          <CardModels
            image='https://car-rental-ten.vercel.app/static/media/golf6-box.1982e958d19e04048c14.png'
            name='VW'
            model='Golf 6'
            value='37'
            transmission='Manual'
            fuel='Diesel'
            />
            <CardModels
            image='https://car-rental-ten.vercel.app/static/media/toyota-box.8968332b7901c6bb183c.png'
            name='Toyota'
            model='Camry'
            value='30'
            transmission='Manual'
            fuel='Hybrid'
            />
            <CardModels
            image='https://car-rental-ten.vercel.app/static/media/bmw-box.185d90ec902e13d80eea.png'
            name='BMW'
            model='320'
            value='35'
            transmission='Manual'
            fuel='Gasoline'
            />
            <CardModels
            image='https://car-rental-ten.vercel.app/static/media/benz-box.a9aa68ef5eb5af1f342b.png'
            name='Mercedes'
            model='GLK SUV'
            value='50'
            transmission='Manual'
            fuel='Diesel'
            />
            <CardModels
            image='https://car-rental-ten.vercel.app/static/media/passat-box.c78021e11cf230128bcc.png'
            name='VW'
            model='Passat'
            value='25'
            transmission='Manual'
            fuel='Gasoline'
            />
        </div>

        <div className='mt-10 mb-10'>
        <BlackStripePhone className=""/>
        </div>

        
      
      </div>

     
    
    </div>
  )
}
