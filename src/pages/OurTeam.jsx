import React from 'react'
import bannerTop from "../assets/heroes-bg.png";
import BlackStripePhone from '../components/BlackStripePhone';
import CardTeam from '../components/CardTeam';

export default function Team() {
  return (
    <div className='text-slate-800  overflow-hidden flex flex-col m-auto'>
      <div className='container w-screen flew-wrap -z-10'>
        <img className='object-cover w-101 absolute left-0 h-80 -top-5 opacity-10 ' src={bannerTop} 
      alt="car" />
      </div>

      <div className='flex flex-col mt-14 z-20  '>
        <h1 className='text-4xl text-slate-600 ml-14'>Our Team</h1>
        <div className=' z-20 ml-14'>
          <a className='mr-1 hover:text-red-500' href="/carstar">Home</a>/
          <span className='ml-1'>Our Team</span>
        </div>

        <div className='container mt-48 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto lg:pl-44 lg:pr-44'>
          <CardTeam
            image='https://car-rental-ten.vercel.app/static/media/1.4ba4d772bcd6e82365e8.png'
            name='Michael Thompson'
            activity=' Fleet Manager'
            />
          <CardTeam
            image='https://car-rental-ten.vercel.app/static/media/3.1d499e4b69de7b9e10fb.png'
            name='Sarah Johnson'
            activity=' Fleet Manager'
            />
          <CardTeam
            image='https://car-rental-ten.vercel.app/static/media/6.528b8c60ae315bc6a52a.png'
            name='Emily Davis'
            activity='Marketing Coordinator'
            />
          <CardTeam
            image='https://car-rental-ten.vercel.app/static/media/5.e46bcc8b44d7c4298aea.png'
            name=' David Clark'
            activity='Operations Manager'
            />
          <CardTeam
            image='https://car-rental-ten.vercel.app/static/media/4.0e752081a69322c59b26.png'
            name='Jessica Wilson'
            activity='Sales Representative'
            />
          <CardTeam
            image='https://car-rental-ten.vercel.app/static/media/2.f41d050c1c5b9e59fc22.png'
            name='Matthew Rodriguez'
            activity='Technical Support Engineer'
            />
       
        </div>

        <div className='mt-10 mb-10'>
        <BlackStripePhone className=""/>
        </div>

        
      
      </div>

     
    
    </div>
  )
}
