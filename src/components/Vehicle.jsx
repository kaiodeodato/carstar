import React, {useState, useEffect} from 'react'

import car1 from "../assets/carAudi.jpg";
import car2 from "../assets/carVolkswagen.jpg";
import car3 from "../assets/carToyota.jpg";
import car4 from "../assets/carBmw.jpg";
import car5 from "../assets/carMercedes.jpg";
import car6 from "../assets/carPassat.jpg";

export default function Vehicle() {
    
    const [cars, setCars] = useState([
        {
            id: 1,
            Model: 'Audi',
            Mark: 'A1',
            Year: '2012',
            Doors: '4/5',
            AC: 'Yes',
            Transmission: 'Manual',
            Fuel: 'Gasoline',
            image: car1
        },
        {
            id: 2,
            Model: 'Golf 6',
            Mark: 'Volkswagen',
            Year: '2008',
            Doors: '4/5',
            AC: 'Yes',
            Transmission: 'Manual',
            Fuel: 'Diesel',
            image: car2
        },
        {
            id: 3,
            Model: 'Camry',
            Mark: 'Toyota',
            Year: '2006',
            Doors: '4/5',
            AC: 'Yes',
            Transmission: 'Automatic',
            Fuel: 'Hybrid',
            image: car3
        },
        {
            id: 4,
            Model: '320',
            Mark: 'BMW',
            Year: '2012',
            Doors: '4/5',
            AC: 'Yes',
            Transmission: 'Manual',
            Fuel: 'Diesel',
            image: car4
        },
        {
            id: 5,
            Model: 'Benz GLK',
            Mark: 'Mercedes',
            Year: '2006',
            Doors: '4/5',
            AC: 'Yes',
            Transmission: 'Manual',
            Fuel: 'Diesel',
            image: car5
        },
        {
            id: 6,
            Model: 'Passat CC',
            Mark: 'Volkswagen',
            Year: '2008',
            Doors: '4/5',
            AC: 'Yes',
            Transmission: 'Automatic',
            Fuel: 'Gasoline',
            image: car6
        },
    ])
    const [car, setCar] = useState(cars[5])
 


  return (
    <div className='container flex flex-col items-center justify-center m-auto mt-24 mb-20'>
        <span className='text-2xl font-bold text-slate-500'>Vehicle Models</span>
        <h1 className='text-3xl lg:text-5xl '>Our rental fleet</h1>
        <span className='text-sm text-slate-400 w-96 text-center mt-4 p-2'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</span>

        <div className='grid md:grid-cols-1 lg:grid-cols-3 items-center mt-28 justify-center m-auto'>

            <div className='flex flex-col items-center justify-center  h-96 w-full md:w-80 m-auto p-4 lg:p-0'>

                <div onClick={()=> setCar(cars[0])} className={`w-full lg:w-72 h-14 m-1 flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors  hover:text-slate-100 ${car === cars[0] ? 'bg-red-500 text-slate-100' : 'text-slate-600 bg-slate-200'} `}>
                    <span className='text-center text-xl'>Audio A1 S-line</span>
                </div>

                <div onClick={()=> setCar(cars[1])} className={`w-full lg:w-72 h-14 m-1 flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors  hover:text-slate-100 ${car === cars[1] ? 'bg-red-500 text-slate-100' : 'text-slate-600 bg-slate-200'} `}>
                    <span className='text-center text-xl'>VW Golf 6</span>
                </div>

                <div onClick={()=> setCar(cars[2])} className={`w-full lg:w-72 h-14 m-1 flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors  hover:text-slate-100 ${car === cars[2] ? 'bg-red-500 text-slate-100' : 'text-slate-600 bg-slate-200'} `}>
                    <span className='text-center text-xl'>Toyota Camry</span>
                </div>

                <div onClick={()=> setCar(cars[3])} className={`w-full lg:w-72 h-14 m-1 flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors  hover:text-slate-100 ${car === cars[3] ? 'bg-red-500 text-slate-100' : 'text-slate-600 bg-slate-200'} `}>
                    <span className='text-center text-xl'>BMW 320 ModernLine</span>
                </div>

                <div onClick={()=> setCar(cars[4])} className={`w-full lg:w-72 h-14 m-1 flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors  hover:text-slate-100 ${car === cars[4] ? 'bg-red-500 text-slate-100' : 'text-slate-600 bg-slate-200'} `}>
                    <span className='text-center text-xl'>Mercedes-Benz GLK</span>
                </div>

                <div onClick={()=> setCar(cars[5])} className={`w-full lg:w-72 h-14 m-1 flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors  hover:text-slate-100 ${car === cars[5] ? 'bg-red-500 text-slate-100' : 'text-slate-600 bg-slate-200'} `}>
                    <span className='text-center text-xl'>VW Passat CC</span>
                </div>
                

            </div>

            <div className='w-full xl:w-97 '>
                <img className='p-2' src={car.image} alt="" />
            </div>

            <div className='flex flex-col items-center justify-center  h-96 w-full md:w-80 m-auto p-4 lg:p-0'>
            
                <div onClick={()=> setCar(cars[0])} className={`w-full lg:w-72 h-14 mt-1 flex items-center justify-center bg-red-500 cursor-pointer transition-colors text-slate-200 `}>
                    <span className='text-2xl font-bold mr-2'>$45</span>
                    <span className='text-center text-xl'>/ rent per day</span>
                </div>



                <div onClick={()=> setCar(cars[0])} className='w-full lg:w-72 h-14 mt-1 grid grid-cols-3 items-center justify-center bg-slate-200 text-slate-600 px-3'>
                    <span className='text-center text-lg'>Model</span>
                    <span className='text-center text-lg '>|</span>
                    <span className='text-center text-lg '>{car.Model}</span>
                </div>

                <div onClick={()=> setCar(cars[0])} className='w-full lg:w-72 h-14 mt-1 grid grid-cols-3 items-center justify-center bg-slate-200 text-slate-600 px-3'>
                    <span className='text-center text-lg'>Mark</span>
                    <span className='text-center text-lg'>|</span>
                    <span className='text-center text-lg '>{car.Mark}</span>
                </div>

                <div onClick={()=> setCar(cars[0])} className='w-full lg:w-72 h-14 mt-1 grid grid-cols-3 items-center justify-center bg-slate-200 text-slate-600 px-3'>
                    <span className='text-center text-lg'>Year</span>
                    <span className='text-center text-lg'>|</span>
                    <span className='text-center text-lg '>{car.Year}</span>
                </div>

                <div onClick={()=> setCar(cars[0])} className='w-full lg:w-72 h-14 mt-1 grid grid-cols-3 items-center justify-center bg-slate-200 text-slate-600 px-3'>
                    <span className='text-center text-lg'>Doors</span>
                    <span className='text-center text-lg'>|</span>
                    <span className='text-center text-lg '>{car.Doors}</span>
                </div>

                <div onClick={()=> setCar(cars[0])} className='w-full lg:w-72 h-14 mt-1 grid grid-cols-3 items-center justify-center bg-slate-200 text-slate-600 px-3'>
                    <span className='text-center text-lg'>AC</span>
                    <span className='text-center text-lg'>|</span>
                    <span className='text-center text-lg '>{car.AC}</span>
                </div>

                <div onClick={()=> setCar(cars[0])} className='w-full lg:w-72 h-14 mt-1 grid grid-cols-3 items-center justify-center bg-slate-200 text-slate-600 px-3'>
                    <span className='text-center text-lg'>Transmission</span>
                    <span className='text-center text-lg'>|</span>
                    <span className='text-center text-lg '>{car.Transmission}</span>
                </div>

                <div onClick={()=> setCar(cars[0])} className='w-full lg:w-72 h-14 mt-1 grid grid-cols-3 items-center justify-center bg-slate-200 text-slate-600 px-3'>
                    <span className='text-center text-lg'>Fuel</span>
                    <span className='text-center text-lg'>|</span>
                    <span className='text-center text-lg '>{car.Fuel}</span>
                </div>
                


                <a href='#bookACar' className={`w-full lg:w-72 h-14 mt-1 flex items-center justify-center hover:bg-slate-200 hover:text-slate-600 bg-red-500 text-slate-100 cursor-pointer transition-colors   `}>
                    <span className='text-center text-xl'>RESERVE NOW</span>
                </a>
                

            </div>
    

        </div>

    </div>
  )
}
