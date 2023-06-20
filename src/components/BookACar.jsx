import React from 'react'

import { FaCar} from "react-icons/fa";
import { MdLocationPin} from "react-icons/md";
import { AiTwotoneCalendar} from "react-icons/ai";

export default function BookACar() {
  return (
    <div  className='relative w-10/12 lg:w-9/12 h-full m-auto flex flex-col z-10 bg-white shadow-xl pb-10 rounded-md mt-10 mb-5'>
        <h1 className='pl-6 pt-3  text-2xl text-slate-700'>Book a car</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>

            <div className='flex flex-col m-auto md:mt-4 '>
                <div className='flex flex-row items-center justify-center '>
                    <FaCar className='text-red-500 mr-3'/>
                    <span className='text-center text-xl'>
                        Select Your Car
                        <span className='text-red-500'>*</span>
                    </span>
                </div>
                <select className='w-72 sm:w-60 xl:w-80 border-2 px-8 rounded-lg p-2 text-lg text-slate-500 ' name="location" id="">
                    <option >select a location</option>
                    <option value="toyota_corolla">Toyota Corolla</option>
                    <option value="honda_civic">Honda Civic</option>
                    <option value="volkswagen_golf">Volkswagen Golf</option>
                    <option value="ford_fiesta">Ford Fiesta</option>
                    <option value="chevrolet_cruze">Chevrolet Cruze</option>
                    <option value="nissan_sentra">Nissan Sentra</option>
                    <option value="hyundai_elantra">Hyundai Elantra</option>
                    <option value="bmw_3_series">BMW 3 Series</option>
                    <option value="mercedes_benz_c_class">Mercedes-Benz C-Class</option>
                    <option value="audi_a4">Audi A4</option>
                </select>
            </div>

            <div className='flex flex-col m-auto md:mt-4 '>
                <div className='flex flex-row items-center justify-center '>
                    <MdLocationPin className='text-red-500 mr-3'/>
                    <span className='text-center text-xl'>
                        Pick-up
                        <span className='text-red-500'>*</span>
                    </span>
                </div>
                <select className='w-72 sm:w-60 xl:w-80 border-2 px-8 rounded-lg p-2 text-lg text-slate-500 ' name="location" id="">
                    <option >select a location</option>
                    <option value="lisbon">Lisbon</option>
                    <option value="porto">Porto</option>
                    <option value="vila_nova_de_gaia">Vila Nova de Gaia</option>
                    <option value="amadora">Amadora</option>
                    <option value="braga">Braga</option>
                    <option value="setubal">Setúbal</option>
                    <option value="coimbra">Coimbra</option>
                    <option value="queluz">Queluz</option>
                    <option value="funchal">Funchal</option>
                    <option value="almada">Almada</option>
                </select>
            </div>

            <div className='flex flex-col m-auto md:mt-4 '>
                <div className='flex flex-row items-center justify-center '>
                    <MdLocationPin className='text-red-500 mr-3'/>
                    <span className='text-center text-xl'>
                        Drop-of
                        <span className='text-red-500'>*</span>
                    </span>
                </div>
                <select className='w-72 sm:w-60 xl:w-80 border-2 px-8 rounded-lg p-2 text-lg text-slate-500 ' name="location" id="">
                    <option  >select a location</option>
                    <option value="lisbon">Lisbon</option>
                    <option value="porto">Porto</option>
                    <option value="vila_nova_de_gaia">Vila Nova de Gaia</option>
                    <option value="amadora">Amadora</option>
                    <option value="braga">Braga</option>
                    <option value="setubal">Setúbal</option>
                    <option value="coimbra">Coimbra</option>
                    <option value="queluz">Queluz</option>
                    <option value="funchal">Funchal</option>
                    <option value="almada">Almada</option>
                </select>
            </div>

            <div className='flex flex-col m-auto md:mt-4 '>
                <div className='flex flex-row items-center justify-center '>
                    <AiTwotoneCalendar className='text-red-500 mr-3'/>
                    <span className='text-center text-xl'>
                        Pick-up
                        <span className='text-red-500'>*</span>
                    </span>
                </div>
                <input className='w-72 sm:w-60 xl:w-80 border-2 px-8 rounded-lg p-2 text-lg text-slate-500 ' name="location" id="" type='date'>
                </input>
            </div>

            <div className='flex flex-col m-auto md:mt-4 '>
                <div className='flex flex-row items-center justify-center '>
                    <AiTwotoneCalendar className='text-red-500 mr-3'/>
                    <span className='text-center text-xl'>
                        Drop-of
                        <span className='text-red-500'>*</span>
                    </span>
                </div>
                <input className='w-72 sm:w-60 xl:w-80 border-2 px-8 rounded-lg p-2 text-lg text-slate-500 ' name="location" id="" type='date'>
                </input>
            </div>

            <div className='flex flex-col m-auto md:mt-4 '>
                
                <div className='cursor-pointer w-72 sm:w-60 xl:w-80 border-2 px-8 rounded-lg p-2  text-slate-100 mt-6 bg-red-500 text-xl text-center hover:bg-slate-100 hover:text-red-500' name="location" id="">
                    Search
                </div>
            </div>

            
        </div>
    </div>
  )
}
