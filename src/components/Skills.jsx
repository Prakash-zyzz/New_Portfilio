import React, { useEffect } from 'react';
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbBrandBulma } from "react-icons/tb";

const LOGOS = [
  <FaReact size={80} className="text-[#999999]" />,
  <SiRedux size={80} className="text-[#999999]" />,
  <FaHtml5 size={80} className=" text-[#999999]" />,
  <FaCss3 size={80}  className="text-[#999999]" />,
  <IoLogoJavascript size={80}  className="text-[#999999]" />,
  <FaBootstrap size={80}  className="text-[#999999]" />,
  <SiTailwindcss size={80}  className="text-[#999999]" />,
  <SiMui size={80}  className="text-[#999999]" />,
  <TbBrandBulma size={80}  className="text-[#999999]" />,
 
];

const Skills = () => {
 return (
  <div name="skills">
    <h1 className='bg-black pt-20 bg-opacity-85 text-[30px] m-auto font-light flex justify-center text-white font-Athiti '>My <span className='font-extrabold ml-2'>Skills</span></h1>
  <div className='w-full h-[400px] flex items-center justify-between bg-black bg-opacity-85'>
  <div className="relative items-center p-8 m-auto w-[1100px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-gradient-to-r from- to- before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,_100%)] after:content-['']">
  <div className="animate-infinite-slider flex w-[calc(250px*10)]">
    {LOGOS.map((logo, index) => (
      <div
        className="slide flex w-[125px] items-center justify-center"
        key={index}
      >
        {logo}
      </div>
    ))}
    {LOGOS.map((logo, index) => (
      <div
        className="slide flex w-[125px] items-center justify-center"
        key={index}
      >
        {logo}
      </div>
    ))}
  </div>
</div>
</div>
</div>
  );
};

export default Skills;
