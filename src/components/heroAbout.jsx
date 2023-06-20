import React from 'react'
import CardQuick from './CardQuick'
import { AiTwotoneCalendar, AiOutlineCheck} from "react-icons/ai";
import { AiFillCar, AiFillTool} from "react-icons/ai";
import { FaWarehouse} from "react-icons/fa";


export default function Home() {
  return (
    <div className='container grid grid-cols-1 lg:grid-cols-2 items-center justify-center mt-32 mb-10  gap-8 lg:px-20 mx-auto'>

        <div className='flex flex-row p-2 lg:pl-28 '>
            <img className='object-cover rounded-md ' src="https://hips.hearstapps.com/hmg-prod/images/two-people-reaching-an-agreement-about-a-car-sale-royalty-free-image-1665671206.jpg" alt="car" />
        </div>
        
        <div className=' p-2 lg:pr-28 text-center lg:text-start'>
            <span className='text-xl font-bold text-slate-400'>About Company</span>
            <h1 className='text-3xl lg:text-4xl font-bold text-slate-700 '>
                You start the engine and your adventure begins
            </h1>
            <span className='text-sm text-slate-400'>
                Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
            </span>

            <div className='lg:grid flex flex-row flex-wrap lg:grid-cols-3 items-center justify-center mt-10 lg:mt-14'>

                <div className='flex flex-col items-center justify-center mt-6 lg:mt-0 mx-5'>
                    <AiFillCar className='text-red-500' size={70}/>
                    <div className='flex flex-row'>
                        <h1 className='text-4xl text-center'>20</h1>
                        <div className='flex flex-col ml-2 text-sm'> 
                            <span>Car</span>
                            <span>Types</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mt-6 lg:mt-0 mx-5'>
                    <FaWarehouse className='text-red-500' size={70}/>
                    <div className='flex flex-row'>
                        <h1 className='text-4xl text-center'>85</h1>
                        <div className='flex flex-col ml-2 text-sm'> 
                            <span>Rental</span>
                            <span>Outlets</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mt-6 lg:mt-0 mx-5'>
                    <AiFillTool className='text-red-500' size={70}/>
                    <div className='flex flex-row'>
                        <h1 className='text-4xl text-center'>75</h1>
                        <div className='flex flex-col ml-2 text-sm'> 
                            <span>Repair</span>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}
