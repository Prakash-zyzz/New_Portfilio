import React from 'react'
import Aimg from "../assets/B&W.jpg"
import {Link} from "react-scroll"

const About = () => {
  return (
    <div>
        <div name="about" className='w-full h-screen bg-black bg-opacity-85'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
               <div>
                <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-16 px-4 sm:py-52'>
                    <div>
                        <img src={Aimg} className='w-full h-full' />
                    </div>
                    <div>
                        <h1 className='text-[30px] font-light font-Athiti text-white'>About <span className='font-extrabold'>Me</span></h1>
                        <p className='text-[20px] font-extralight text-[#999999] py-7'>Hi there! I'm Prakash G, a React.js developer. I specialize in creating dynamic web applications using React.Seeking for an opportunity to utilize my strong technical skills and creative mindset to contribute to the success of a dynamic organization</p>
                        <p className='text-[16px] font-light text-[#999999] py-2 '> love building clean, reusable components and staying updated with the latest industry trends. Let's create awesome user experiences together!</p>
                        <div className='py-4'>
                        <Link to="contact"  smooth={true}  duration={500} >
                        <button className='px-4 py-2 bg-[#BAC964] rounded-full text-[16px] cursor-pointer'>Hire Me</button>
                        </Link>
                        <button className='px-4 py-2 text-white bg-[#999999] rounded-full ml-4 text-[16px] cursor-pointer'>Download CV</button>
                    </div>
                    </div>
                    
                </div>
                       
               </div>
            </div>
           
        </div>
    </div>
  )
}

export default About