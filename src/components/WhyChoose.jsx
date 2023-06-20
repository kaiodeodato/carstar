import React from 'react'
import CardWhy from '../components/CardWhy'

import { VscWorkspaceTrusted} from "react-icons/vsc";
import { MdCardTravel} from "react-icons/md";
import { FaMoneyBillWave} from "react-icons/fa";

export default function WhyChoose() {
  return (
    <div className='container grid grid-cols-1 lg:grid-cols-2 items-center justify-center m-auto mb-20 mt-10 '>

      <div className='flex flex-col ml-0 text-center md:text-start md:ml-32'>
        <span className='text-2xl font-bold text-slate-500 '>Why Choose Us</span>
        <h1 className='text-3xl lg:text-5xl mb-5'>Best valued deals you will ever find</h1>
        <span className='text-slate-400 '>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</span>
        <a className='w-40 flex items-center justify-center rounded-md text-lg font-bold transition-colors bg-red-500 text-slate-100 hover:text-red-500 hover:bg-slate-200 px-3 py-2 mx-auto md:mx-0 mt-6' href="#home">Find Details</a>
      </div>

      <div className='grid grid-cols-1  items-center gap-5 md:gap-10 lg:gap-10 lg:mx-14 justify-center mt-5'>
          <CardWhy
              icon={<MdCardTravel size={50}/>}
              title="Cross Country Drive"
              content="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
          />
          <CardWhy
              icon={<FaMoneyBillWave size={50}/>}
              title="All Inclusive Pricing"
              content="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
          />
          <CardWhy
              icon={<VscWorkspaceTrusted size={50}/>}
              title="No Hidden Charges"
              content="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
          />
      </div>
    </div>
  )
}
