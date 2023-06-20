import React from 'react'
import CardQuick from './CardQuick'
import { AiTwotoneCalendar, AiOutlineCheck} from "react-icons/ai";
import { IoMdCar} from "react-icons/io";
import { TiMessages} from "react-icons/ti";


export default function Home() {
  return (
    <div className='container flex flex-col items-center justify-center m-auto mt-14 mb-20'>
        <span className='text-2xl font-bold text-slate-500'>Plan your trip now</span>
        <h1 className='text-3xl lg:text-5xl'>Quick & easy car rental</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-14 md:gap-10 lg:gap-10 lg:mx-28 justify-center mt-28'>

            <CardQuick
                icon={<AiOutlineCheck size={50}/>}
                title="Select Car"
                content="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
            />
            <CardQuick
                icon={<TiMessages size={50}/>}
                title="Contact Operator"
                content="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
            />
            <CardQuick
                icon={<IoMdCar size={50}/>}
                title="Let's Drive"
                content="Whether you're hitting the open road, we've got you covered with our wide range of cars"
            />
          

        </div>
    </div>
  )
}
