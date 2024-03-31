// Hero.js
import React from 'react';
import Heros from "../assets/25096.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className="relative h-screen">
      <img className='w-full h-full object-cover' src={Heros} alt="Background" />
      
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center items-center flex-col">
        <div>
          <h1 className='text-white sm:text-5xl text-[50px] font-extralight'>Hello, I'm</h1>
        </div>
        <div className='mt-1'>
          <h1 className='text-white font-extrabold sm:text-7xl text-[60px]'>Prakash G</h1>
        </div>
        <div className='mt-4'>
          <h1 className='text-white font-bold'>AND THIS IS MY RESUME</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
