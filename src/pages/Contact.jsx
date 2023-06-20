import React,{useRef, useState} from 'react'
import bannerTop from "../assets/heroes-bg.png";
import TestimonialsComponent from '../components/Testimonials'
import BlackStripePhone from '../components/BlackStripePhone';


export default function Contact() {
  const [message, setMessage] =useState({
    status: 'null',
    content:''
  })
  const messageRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const textRef = useRef(null);

  const handleMessage = () => {
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(textRef.current.value)

    if(nameRef.current.value === '' || emailRef.current.value === '' || textRef.current.value === ''){
      setMessage({
        status: 'erro',
        content:'All Inputs Are Require *'
      })

    }else{
      setMessage({
        status: 'success',
        content:'Your Form Was Send *'
      })
    }
    
  };


  return (
    <div className='text-slate-800  overflow-hidden flex flex-col m-auto '>
      <div className='container w-screen flew-wrap -z-10'>
        <img className='object-cover w-101 absolute left-0 h-80 -top-5 opacity-10 ' src={bannerTop} 
      alt="car" />
      </div>

      <div className='flex flex-col mt-14 z-20  '>
        <h1 className='text-4xl text-slate-600 ml-14'>Contact</h1>
        <div className=' z-20 ml-14'>
          <a className='mr-1 hover:text-red-500' href="/carstar">Home</a>/
          <span className='ml-1'>Contact</span>
        </div>

        

        <div className='container mt-48 grid grid-cols-1 lg:grid-cols-2  gap-12 mx-auto lg:pl-44 lg:pr-44 p-5'>
         <div className='flex flex-col'>
          <h1 className='text-4xl font-bold text-slate-600 mb-5'>Need additional information?</h1>
          <span className='text-slate-400 mb-5'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</span>
          <div className='flex flex-col'>
            <a className='hover:text-slate-400' href='/carstar'>(123) 456-7899</a>
            <a className='hover:text-slate-400' href='/carstar'>carrental@carmail.com</a>
            <a className='hover:text-slate-400' href='/carstar'>Lisboa, Portugal</a>
          </div>

  

         </div>

         <div className='flex flex-col mb-10'>

          <h1 ref={messageRef} className={` 
          ${message.status === 'null' ? 'hidden' : 'block'} 
          ${message.status === 'erro' ? 'bg-red-500 text-slate-200' : 'bg-green-600 text-slate-200'} 
          flex flex-row items-center  justify-center p-2 rounded-md `} >{message.content}
          </h1>

          <span>Full Name <span className='text-red-500'>*</span></span>
          <input required ref={nameRef} className="cursor-pointer  rounded-md flex items-center justify-center text-lg   transition-colors bg-slate-200 text-slate-700 hover:text-red-500 hover:bg-slate-200 
            md:p-2 p-2 mb-6" placeholder="E.g: 'Ross Geller'" type="text" />

          <span>Email <span className='text-red-500'>*</span></span>
          <input required ref={emailRef} className="cursor-pointer rounded-md flex items-center justify-center text-lg   transition-colors bg-slate-200 text-slate-700 hover:text-red-500 hover:bg-slate-200 
            md:p-2 p-2 mb-6" placeholder="E.g: drgeller@amnh.org" type="text" />

          <span>Tell us about it <span className='text-red-500'>*</span></span>
          <textarea required ref={textRef} className='cursor-pointer rounded-md flex items-center justify-center text-lg   transition-colors bg-slate-200 text-slate-700 hover:text-red-500 hover:bg-slate-200 
            md:p-2 p-2 mb-2' placeholder="Write Here..." />

          <span onClick={handleMessage}
          className="cursor-pointer  rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-red-500 text-slate-100 hover:text-slate-800 hover:bg-slate-200 
            md:p-2 p-2"
          >
            <div className="flex-col items-start md:flex">
                <span>Submit</span>
            </div>
          </span>

         </div>
        </div>

        <div className='mt-10 mb-10'>
        <BlackStripePhone className=""/>
        </div>
      
      </div>

     
    
    </div>
  )
}
<div className='flex flex-col text-center md:text-start m-auto'>
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