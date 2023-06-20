import React, { useState } from 'react';
import {IoIosArrowDown} from "react-icons/io";
import car from '../assets/car3.png'

export default function Asked() {
    const [status1, setStatus1] = useState(true)
    const [status2, setStatus2] = useState(false)
    const [status3, setStatus3] = useState(false)
    const [status4, setStatus4] = useState(false)
    const [status5, setStatus5] = useState(false)

  return (
    <div className='w-full h-full flex flex-col items-center justify-center m-auto mt-10 p-5 mb-10 z-20'>

        <span className='text-2xl font-bold text-slate-500'>FAQ</span>
        <h1 className='text-3xl lg:text-5xl'>Frequently Asked Questions</h1>
        <span className='text-sm text-slate-400 w-96 md:w-97 text-center mt-4 mb-10 p-2'>
        Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
        </span>

        <div className='flex flex-col items-center justify-center z-20 '>

           
            <div onClick={()=> setStatus1(!status1)} className={`${status1 ? 'bg-red-500 text-slate-200' : 'bg-slate-100 text-slate-600'} cursor-pointer transition-all text-xl  hover:bg-red-500 hover:text-slate-200 flex flex-row items-center justify-between  w-full md:w-99 m-auto px-8 py-4`}>
                <span>1. What is special about comparing rental car deals?</span>
                <IoIosArrowDown/>
            </div >
            <div
                className={`overflow-hidden ${status1 ? 'h-44' : 'h-0'}`}
                style={{ transitionDuration: '1000ms' }}
                >
                <span className='flex flex-row items-center justify-between bg-slate-100 w-full md:w-99 m-auto p-8'>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.</span>
            </div>

            <div onClick={()=> setStatus2(!status2)} className={`${status2 ? 'bg-red-500 text-slate-200' : 'bg-slate-100 text-slate-600'} cursor-pointer transition-all text-xl  hover:bg-red-500 hover:text-slate-200 flex flex-row items-center justify-between  w-full md:w-99 m-auto px-8 py-4`}>
                <span>2. How do I find the car rental deals?</span>
                <IoIosArrowDown/>
            </div >
            <div
                className={`overflow-hidden ${status2 ? 'h-44' : 'h-0'}`}
                style={{ transitionDuration: '1000ms' }}
                >
                <span className='flex flex-row items-center justify-between bg-slate-100 w-full md:w-99 m-auto p-8'>You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.</span>
            </div>

            <div onClick={()=> setStatus3(!status3)} className={`${status3 ? 'bg-red-500 text-slate-200' : 'bg-slate-100 text-slate-600'} cursor-pointer transition-all text-xl  hover:bg-red-500 hover:text-slate-200 flex flex-row items-center justify-between  w-full md:w-99 m-auto px-8 py-4`}>
                <span>3. How do I find such low rental car prices?</span>
                <IoIosArrowDown/>
            </div >
            <div
                className={`overflow-hidden ${status3 ? 'h-44' : 'h-0'}`}
                style={{ transitionDuration: '1000ms' }}
                >
                <span className='flex flex-row items-center justify-between bg-slate-100 w-full md:w-99 m-auto p-8'>Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.</span>
            </div>

            <div onClick={()=> setStatus4(!status4)} className={`${status4 ? 'bg-red-500 text-slate-200' : 'bg-slate-100 text-slate-600'} cursor-pointer transition-all text-xl  hover:bg-red-500 hover:text-slate-200 flex flex-row items-center justify-between  w-full md:w-99 m-auto px-8 py-4`}>
                <span>4. How can I make a car rental reservation?</span>
                <IoIosArrowDown/>
            </div >
            <div
                className={`overflow-hidden ${status4 ? 'h-44' : 'h-0'}`}
                style={{ transitionDuration: '1000ms' }}
                >
                <span className='flex flex-col items-start  bg-slate-100 w-full md:w-99 m-auto p-8'>
                    <li>Visit our website or mobile app.</li>
                    <li>Enter your pickup and drop-off locations, as well as the dates and times.</li>
                    <li>Browse through available car options and select the one that suits your needs.</li>
                    <li>Provide the necessary personal information and any additional requirements.</li>
                    <li>Review the reservation details and make the payment.</li>
                    <li>Once the reservation is confirmed, you will receive a confirmation email with
                    all the necessary information.</li>
                </span>
            </div>

            <div onClick={()=> setStatus5(!status5)} className={`${status5 ? 'bg-red-500 text-slate-200' : 'bg-slate-100 text-slate-600'} cursor-pointer transition-all text-xl  hover:bg-red-500 hover:text-slate-200 flex flex-row items-center justify-between  w-full md:w-99 m-auto px-8 py-4`}>
                <span>5. What documents do I need to rent a car?</span>
                <IoIosArrowDown/>
            </div >
            <div
                className={`overflow-hidden ${status5 ? 'h-44' : 'h-0'}`}
                style={{ transitionDuration: '1000ms' }}
                >
                <span className='flex flex-col items-start  bg-slate-100 w-full md:w-99 m-auto p-8'>
                    <li>A valid driver's license: Make sure your driver's license is current and not expired.</li>
                    <li>Proof of identification: This can be your passport or a government-issued ID card.</li>
                    <li>Credit card required for payment and as a security deposit. Make sure you have a credit card with sufficient funds.</li>
                    <li>If you have your own car insurance policy, bring the proof of insurance. </li>
                   
                </span>
            </div>


        </div>
        <img className='absolute w-99 opacity-5 lg:opacity-10 xl:opacity-10 z-10 left-0' src={car} alt="car" />
    </div>
  );
}




































