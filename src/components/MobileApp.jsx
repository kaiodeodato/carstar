import { Link } from "react-router-dom";
import app from "../assets/app.png";
import { AiFillCheckCircle,AiFillApple } from 'react-icons/ai';
import { IoIosArrowForward} from 'react-icons/io';
import { FaGooglePlay} from 'react-icons/fa';

export default function MobileApp() {
  return (
    <section  className="overflow-hidden h-96a  bg-slate-100 flex items-center justify-center">
    <div className="container ">
      
        <div className="grid grid-col-1 md:grid-col-2 items-center justify-center  ">

            <div className="absolute flex flex-col items-center md:items-start justify-center text-center md:text-start w-full md:w-1/2 lg:w-2/5 md:left-10 lg:left-32 md:ml-10 p-8 md-p-2 z-20">
               
                <h1 className="text-5xl  z-30 font-bold tracking-wide mt-4">
                Download our 
                 <span className="text-red-500"> app </span>
                to get most out of it
                </h1>
                <p className="text-lg w-9/12 mt-4 z-30 text-slate-500">
                Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.
                </p>
                
                <div className="grid grid-cols-2 items-center justify-center gap-6 mt-0 lg:mt-8">

                    <span 
                    className="cursor-pointer rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-red-500 text-slate-100 hover:text-red-500 hover:bg-slate-200 
                     md:p-2 p-3"
                    
                    >
                    <FaGooglePlay className="" size={30}/>
                    <div className="flex-col items-start hidden md:flex">
                        <span className="text-sm font-light">GET IT ON</span>
                        <span>Google Play</span>
                    </div>
                    </span>

                    <span 
                    className="cursor-pointer rounded-md flex items-center justify-center text-lg text-center font-bold transition-colors bg-slate-800 text-slate-100 hover:text-red-500 hover:bg-slate-200 
                     md:p-2 p-2"
                    
                    >
                    <AiFillApple className="" size={40}/>
                    <div className="flex-col items-start hidden md:flex">
                        <span className="text-sm font-light">Download on the </span>
                        <span>App Store</span>
                    </div>
                    </span>

                   

                   
                </div>

            </div>
            
          
            <img
            src={app}
            alt="app"
            className="relative translate-y-14 lg:block hidden m-auto z-10"
            />
          

        </div>
    </div>

  </section>
  )
}
