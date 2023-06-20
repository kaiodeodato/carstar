import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { AiFillStar,AiTwotoneStar } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';



export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const falseMenu = () => {
    setIsMenuOpen(false);
  };



  return (
    <div id="home" className="flex flex-row  justify-center z-20  items-center">

    <div
      className={`container top-2 absolute z-10 flex flex-row items-center justify-between mx-auto font-bold drop-shadow-lg bg-indigo-1000 rounded-lg`}
    >

      <div className="relative flex items-center flex-shrink-0  mr-6 bg">
        <Link className="flex flex-row items-center justify-center text-xl sm:text-4xl ml-8  " to="/carstar">

      
        <AiFillStar size={45} className='absolute text-yellow-500 -rotate-90 -translate-x-16 ' />
        <AiFillStar size={45} className='text-red-500 -rotate-90 ' />


        <div className='flex flex-row items-end justify-center '>
          <span className='text-4xl text-slate-600'>Car</span>
          <span className='text-4xl text-red-500 '>star</span>

        </div>

        </Link>
      </div>

      
      <>
        <button
        type="button"
        onClick={toggleMenu}
        className="block lg:hidden focus:outline-none mr-8 text-slate-800 hover:text-red-500 transition-colors "
        >

          {!isMenuOpen && <GiHamburgerMenu size={30} />}

        </button>

      <div
        className={`${
          isMenuOpen ? 'absolute top-9 ' : 'hidden'
        } w-full flex justify-center items-center lg:block lg:w-auto `}
        id="navbar-default"
      >
        <ul className="w-96 sm:w-auto bg-indigo-1000 rounded-md text-center text-slate-600 font-medium flex flex-col p-4 md:p-0 mt-4 bg-slate-200 md:bg-transparent   md:text-sm lg:text-lg md:flex-row md:space-x-8 md:mt-0">
          <li>
            <Link
              to="/carstar"
              className="block py-2 transition-colors text-slate-700 hover:text-slate-400 "
              onClick={falseMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/carstar/about"
              className="block py-2 transition-colors text-slate-700 hover:text-slate-400 "
              onClick={falseMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/carstar/models"
              className="block py-2 transition-colors text-slate-700 hover:text-slate-400  "
              onClick={falseMenu}
            >
              Models
            </Link>
          </li>
          <li>
            <Link
              to="/carstar/testimonials"
              className="block py-2 transition-colors text-slate-700 hover:text-slate-400  "
              onClick={falseMenu}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/carstar/ourteam"
              className="block py-2 transition-colors text-slate-700 hover:text-slate-400  "
              onClick={falseMenu}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/carstar/contact"
              className="block py-2 transition-colors text-slate-700 hover:text-slate-400 "
              onClick={falseMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div> 
      </>
      

      
      {
     
      <div className="hidden sm:flex flex-row items-center justify-center">
        <Link to='/carstar/contact' className='cursor-pointer mx-4 transition-colors text-slate-700 hover:text-slate-400'>
          Sign in
        </Link>     
        <span className='cursor-pointer mx-4 transition-colors bg-red-500 text-slate-100 hover:text-red-500 hover:bg-slate-200 px-3 py-2'>
          Register
        </span>
      </div>
      }
    </div>
  </div>
  );
}


