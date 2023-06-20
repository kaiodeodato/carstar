import { Link } from "react-router-dom";
import BgShape from "../assets/hero-bg.png";
import HeroCar from "../assets/main-car.png";
import { useEffect, useState } from "react";
import { AiFillCheckCircle } from 'react-icons/ai';
import { IoIosArrowForward} from 'react-icons/io';

function Hero() {

  return (
    <>
      <section  className="">
        <div className="container">
            <img className="absolute top-0 right-0 z-0 md:block hidden" src={BgShape} alt="bg-shape" />

            <div className="grid grid-col-1 md:grid-col-2 items-center justify-center mt-80 bg-orange-300 ">

                <div className="absolute flex flex-col items-center md:items-start justify-center text-center md:text-start w-full md:w-1/2 lg:w-2/5 md:left-10 lg:left-32 md:ml-10 p-8 md-p-2">
                    <h4 className="text-2xl  font-bold text-center">Plan your trip now</h4>
                    <h1 className="text-6xl  z-30 font-bold tracking-wide mt-4">
                        Save <span className="text-red-500">big</span> with our car rental
                    </h1>
                    <p className="text-lg w-9/12 mt-4 z-30 text-slate-500">
                        Rent the car of your dreams. Unbeatable prices, unlimited miles,
                        flexible pick-up options and much more.
                    </p>
                    
                    <div className="grid grid-cols-2 items-center justify-center gap-6 mt-8">
                        <a id='bookACar'
                        className="rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-red-500 text-slate-100 hover:text-red-500 hover:bg-slate-200 px-3 py-2"
                        href="#bookACar"
                        >
                        Book Ride <AiFillCheckCircle className="ml-2"/>
                        </a>
                        <Link className="rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-slate-800 text-slate-100 hover:text-slate-800 hover:bg-slate-200 px-3 py-2" 
                        to="/carstar/about">
                        Learn More <IoIosArrowForward className="ml-2"/>
                        </Link>
                    </div>

                </div>

                <img
                src={HeroCar}
                alt="car-img"
                className="absolute z-20 right-10 lg:right-32 w-3/6 md:block hidden "
                />

            </div>
        </div>

      </section>
    </>
  );
}

export default Hero;

<div className="hidden sm:flex flex-row items-center justify-center">
        <span className='cursor-pointer mx-4 transition-colors text-slate-700 hover:text-slate-400'>
          Sign in
        </span>     
        <span className='cursor-pointer mx-4 transition-colors bg-red-500 text-slate-100 hover:text-red-500 hover:bg-slate-200 px-3 py-2'>
          Register
        </span>
      </div>