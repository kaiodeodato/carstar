import React,{ useState,useEffect } from 'react'
import HeroHome from '../components/HeroHome'
import BookACar from '../components/BookACar'
import Quick from '../components/Quick'
import Vehicle from '../components/Vehicle'
import BlackStripe from '../components/blackStripe'
import carshome from "../assets/carshome.png";
import WhyChoose from '../components/WhyChoose'
import { MdOutlineKeyboardArrowUp} from "react-icons/md";
import Testimonials from '../components/Testimonials'
import Asked from '../components/Asked'
import MobileApp from '../components/MobileApp'



export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className='flex flex-col w-screen  text-slate-800'>

      {scrollPosition > 300 && 
          <a href='#home' className='fixed right-10 bottom-10 w-12 h-12 bg-red-500 rounded-lg z-30 flex flex-row items-center justify-center hover:scale-105 transition-transform shadow-xl border-2'>
            <MdOutlineKeyboardArrowUp size={40} className='text-slate-200'/>
    
          </a>
      }

      <div className='mb-72'>
        <HeroHome/>
      </div>

      <BookACar/>
      <Quick/>
      <Vehicle/>
      <BlackStripe/>
      <div className='flex flex-row items-center justify-center mt-8'>
        <img src={carshome} alt="" />
      </div>
      <WhyChoose/>
      <Testimonials/>
      <Asked/>
      <MobileApp/>
      
    </div>
  )
}
