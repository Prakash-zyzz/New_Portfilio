import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {Link} from "react-scroll"

const Footer = () => {
  return (
    <div name='footer' className='w-full h-full bg-black bg-opacity-85 py-20'>
      <div className='flex justify-center'>
        <p className='text-[#999999] text-[16px] font-light '>Copyright © 2024 | Made With <span className='text-[#BAC964]'>React Js</span></p>
      </div>
      <div className='flex justify-center text-[#BAC964] pt-8'>
        <a href='https://github.com/Prakash-zyzz'>
        <FaGithub fontSize={35} className='cursor-pointer'  />
        </a>
        <a href='https://www.linkedin.com/in/prakash-g-499524282/'>
        <FaLinkedin fontSize={35} className='mx-10 cursor-pointer' />
        </a>
        <a href='https://drive.google.com/file/d/1ZM6a6OHhjKjY0L3-gIQ1AREyQRiNg9Fd/view?usp=drive_link'>
        <IoMdDocument fontSize={35} className='cursor-pointer' />
        </a>
        
      </div>
      <div className='flex justify-center py-2'>
      <hr class="h-px my-8 w-[60%]  bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div className='flex justify-center text-[#999999]'>
          <Link to="home"  smooth={true}  duration={500}>
          <IoIosArrowUp fontSize={30} className=' cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
          </Link>
      </div>
    </div>
  )
}

export default Footer
