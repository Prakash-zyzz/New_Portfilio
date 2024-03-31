// About.js
import React from 'react';
import Aimg from "../assets/B&W.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-black bg-opacity-85 relative pt-28'> {/* Added py-8 for padding */}
      <div className='flex justify-center items-center h-full'>
        <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-16 px-4'>
          <div>
            <img src={Aimg} className='w-full h-full object-cover' alt="About" />
          </div>
          <div className='text-center sm:text-left'>
            <h1 className='text-[30px] font-light font-Athiti text-white'>About <span className='font-extrabold'>Me</span></h1>
            <p className='text-[20px] font-extralight text-[#999999] py-7'>Hi there! I'm Prakash G, a React.js developer. I specialize in creating dynamic web applications using React. Seeking for an opportunity to utilize my strong technical skills and creative mindset to contribute to the success of a dynamic organization.</p>
            <p className='text-[16px] font-light text-[#999999] py-2'>I love building clean, reusable components and staying updated with the latest industry trends. Let's create awesome user experiences together!</p>
            <div className='py-4'>
              <Link to="contact" smooth={true} duration={500}>
                <button className='px-4 py-2 bg-[#BAC964] rounded-full text-[16px] cursor-pointer'>Hire Me</button>
              </Link>
              <a href='https://drive.google.com/file/d/1ZM6a6OHhjKjY0L3-gIQ1AREyQRiNg9Fd/view?usp=drive_link'>
              <button className='px-4 py-2 text-white bg-[#999999] rounded-full ml-4 text-[16px] cursor-pointer'>Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
