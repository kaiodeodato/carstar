import React,{ useState } from 'react'
import {IoIosArrowDown} from "react-icons/io";

export default function Footer() {
  const [status1Footer, setStatus1Footer] = useState(false)
  const [status2Footer, setStatus2Footer] = useState(false)
  const [status3Footer, setStatus3Footer] = useState(false)


  return (
    <>
    <div className='hidden container lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-center w-full lg:h-80 lg:px-32 pt-14 pb-14 gap-4 overflow-hidden '>
      
      <div className='flex flex-col text-center md:text-start'>
        <h1 className='text-xl font-bold text-slate-600 mb-4' >CAR Rental</h1>
        <span className='mb-4 w-64 lg:w-full m-auto text-slate-500 text-center md:text-start'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</span>

        <a className='hover:text-slate-600' href="#home">(123)-456-789</a>
        <a className='hover:text-slate-600' href="#home">carrental@gmail.com</a>
        <a className='hover:text-slate-600' href="#home">Build by Kaio Deodato</a>
      </div>

      <div className='flex flex-col ml-0 md:ml-8 text-center md:text-start'>
        <h1 className='text-xl font-bold text-slate-600 mb-4'>COMPANY</h1>
        <a className='text-slate-600 mb-2' href='#home'>New York</a>
        <a className='text-slate-600 mb-2' href='#home'>Careers</a>
        <a className='text-slate-600 mb-2' href='#home'>Mobile</a>
        <a className='text-slate-600 mb-2' href='#home'>Blog</a>
        <a className='text-slate-600 mb-2' href='#home'>How we work</a>

      </div>
      <div className='flex flex-col text-center md:text-start'>
        <h1 className='text-xl font-bold text-slate-600 mb-4'>WORKING HOURS</h1>
        <span className='text-slate-600 mb-2'>Mon - Fri: 9:00AM - 9:00PM</span>
        <span className='text-slate-600 mb-2'>Sat: 9:00AM - 19:00PM</span>
        <span className='text-slate-600 mb-2'>Sun: Closed</span>

      </div>

      <div className='flex flex-col text-center md:text-start '>
        <h1 className='text-xl font-bold text-slate-600 mb-4'>SUBSCRIPTION</h1>
        <span className='w-64 text-slate-600 mb-2'>Subscribe your Email address for latest news & updates.</span>
        <input className="cursor-pointer w-64 rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-slate-200 text-slate-700 hover:text-red-500 hover:bg-slate-200 
            md:p-2 p-2 mb-2" type="text" />
        <a href='#home'
          className="cursor-pointer w-64 rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-red-500 text-slate-100 hover:text-slate-800 hover:bg-slate-200 
            md:p-2 p-2"
          
          >
          <div className="flex-col items-start md:flex">
              <span>Submit</span>
          </div>
          </a>

      </div>

    </div>

{/* responsive */}


<div className='lg:hidden  w-full h-full flex flex-col items-center justify-center m-auto mt-10 p-5 mb-10 '>
  <div className='flex flex-col items-center justify-center '>

  
    <div onClick={()=> setStatus1Footer(!status1Footer)} className={`${status1Footer ? 'bg-slate-500 text-slate-200' : 'bg-slate-100 text-slate-600'} cursor-pointer transition-all text-base  hover:bg-slate-500 hover:text-slate-200 flex flex-row items-center justify-between  w-screen  px-8 py-4`}>
        <span >CAR Rental</span>
        <IoIosArrowDown/>
    </div >
    <div
        className={`overflow-hidden ${status1Footer ? 'h-44' : 'h-0'}`}
        style={{ transitionDuration: '1000ms' }}
        >
        <div className='flex flex-col text-center md:text-start mt-2'>
          <span className='mb-4 w-64 lg:w-full m-auto text-slate-500 text-center md:text-start'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</span>

          <a className='hover:text-slate-600' href="#home">(123)-456-789</a>
          <a className='hover:text-slate-600' href="#home">carrental@gmail.com</a>
          <a className='hover:text-slate-600' href="#home">Build by Kaio Deodato</a>
        </div>
    </div>

    <div onClick={()=> setStatus2Footer(!status2Footer)} className={`${status2Footer ? 'bg-slate-500 text-slate-200' : 'bg-slate-100 text-slate-600'} cursor-pointer transition-all text-base  hover:bg-slate-500 hover:text-slate-200 flex flex-row items-center justify-between  w-screen  px-8 py-4`}>
        <span>COMPANY</span>
        <IoIosArrowDown/>
    </div >
    <div
        className={`overflow-hidden ${status2Footer ? 'h-44' : 'h-0'}`}
        style={{ transitionDuration: '1000ms' }}
        >
        <div className='flex flex-col ml-0 md:ml-8 text-center md:text-start mt-2'>
          <a className='text-slate-600 mb-2' href='#home'>New York</a>
          <a className='text-slate-600 mb-2' href='#home'>Careers</a>
          <a className='text-slate-600 mb-2' href='#home'>Mobile</a>
          <a className='text-slate-600 mb-2' href='#home'>Blog</a>
          <a className='text-slate-600 mb-2' href='#home'>How we work</a>
        </div>
        
    </div>

    <div onClick={()=> setStatus3Footer(!status3Footer)} className={`${status3Footer ? 'bg-slate-500 text-slate-200' : 'bg-slate-100 text-slate-600'} cursor-pointer transition-all text-base  hover:bg-slate-500 hover:text-slate-200 flex flex-row items-center justify-between  w-screen  px-8 py-4`}>
        <span>WORKING HOURS</span>
        <IoIosArrowDown/>
    </div >
    <div
        className={`overflow-hidden ${status3Footer ? 'h-24' : 'h-0'}`}
        style={{ transitionDuration: '1000ms' }}
        >
         <div className='flex flex-col text-center md:text-start mt-2'>
          <span className='text-slate-600 mb-2'>Mon - Fri: 9:00AM - 9:00PM</span>
          <span className='text-slate-600 mb-2'>Sat: 9:00AM - 19:00PM</span>
          <span className='text-slate-600 mb-2'>Sun: Closed</span>
        </div>
    </div>

    

    <div className='flex flex-col text-center md:text-start m-auto mt-10'>
    <h1 className='text-xl font-bold text-slate-600 mb-4'>SUBSCRIPTION</h1>
    <span className='w-64 text-slate-600 mb-2'>Subscribe your Email address for latest news & updates.</span>
    <input className="cursor-pointer w-64 rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-slate-200 text-slate-700 hover:text-red-500 hover:bg-slate-200 
        md:p-2 p-2 mb-2" type="text" />
    <a href='#home'
      className="cursor-pointer w-64 rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-red-500 text-slate-100 hover:text-slate-800 hover:bg-slate-200 
        md:p-2 p-2"
      
      >
      <div className="flex-col items-start md:flex">
          <span>Submit</span>
      </div>
      </a>

  </div>


</div>

</div>




</>
  )
}



























