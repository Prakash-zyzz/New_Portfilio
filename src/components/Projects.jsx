import React from 'react'
import Aimg from "../assets/DressUp.jpg"
import Time from "../assets/Timeout.jpg"
import Real from "../assets/realestate.jpg"
import Score from "../assets/scorekeeper.png"
import Block from "../assets/blockchain.jpg"


const Projects = () => {
  return (
    <div name='projects' className='w-full h-full bg-black bg-opacity-85 py-24'>
      <h1 className='flex justify-center items-center text-[30px] text-white font-Athiti '>Project<span className='font-extrabold to-uppercase'>S</span></h1>
      <div className='flex flex-col justify-center items-center w-full h-full py-16'>
               <div>
                <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-16'>
                    
                    <div className='delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0" data-taos-offset="400'>
                        <h1 className='text-[30px] font-light font-Athiti text-white'>Dress<span className='font-extrabold'>UP</span></h1>
                        <p className='text-[20px] font-extralight text-[#999999] py-7'>Designed and developed a men's dress-up e-commerce platform utilizing React.js, Strapi, and Material-UI. while Strapi served as the CMS for efficient content management. Integrated Material-UI for a modern and responsive design, ensuring seamless navigation across devices</p>
                        <p className='text-[16px] font-light text-[#999999] py-2 '> #WebDevelopment #ReactJS #MaterialUI #Strapi #EcommerceWebsite #FrontEndDevelopment #JavaScript #Programming #WebDesign #UIUX</p>
                        <div className='py-4'>
                        <a href='https://github.com/Prakash-zyzz/DressUp'>
                        <button className='px-8 py-2 cursor-pointer bg-[#BAC964] rounded-full text-[16px]'>VIEW</button>
                        </a>
                    </div>
                    </div>
                    <div>
                       <img src={Aimg} className='w-full h-full hover:rotate-[0.5] shadow-lg shadow-green-50/100 transition-transform duration-300 style={{box-shadow:"#BAC964"}}' />
                    </div>

                </div>

                <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 py-24 px-16'>
                    
                    <div>
                        <h1 className='text-[30px] font-light font-Athiti text-white'>Time<span className='font-extrabold'>OUT</span></h1>
                        <p className='text-[20px] font-extralight text-[#999999] py-7'>Designed and developed a Watch TimeOut e-commerce platform utilizing React.js, Strapi, and Material-UI. while Strapi served as the CMS for efficient content management. Integrated Material-UI for a modern and responsive design, ensuring seamless navigation across devices</p>
                        <p className='text-[16px] font-light text-[#999999] py-2 '> 
                           #WebDevelopment #ReactJS #MaterialUI #Strapi #EcommerceWebsite #FrontEndDevelopment #JavaScript #Programming #WebDesign #UIUX</p>
                        <div className='py-4'>
                        <a href='https://github.com/Prakash-zyzz/Tiemeout'>
                        <button className='px-8 py-2 cursor-pointer bg-[#BAC964] rounded-full text-[16px]'>VIEW</button>
                        </a>
                        
                    </div>
                    </div>
                    <div>
                       <img src={Time} className='w-full h-full hover:rotate-[0.5] shadow-lg shadow-green-50/100 transition-transform duration-300 style={{box-shadow:"#BAC964"}}' />
                    </div>
                </div>

                <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 py-3 px-16'>
                    
                    <div>
                        <h1 className='text-[30px] font-light font-Athiti text-white'>Zane <span className='font-extrabold'>Builders</span></h1>
                        <p className='text-[20px] font-extralight text-[#999999] py-7'>Crafted a captivating landing page for Zane Builders, a construction company, using React.js and Tailwind CSS. Employed Tailwind CSS's utility-first approach to streamline styling and ensure responsiveness across various devices</p>
                        <p className='text-[16px] font-light text-[#999999] py-2 '> #WebDevelopment #ReactJS #Tailwindcss #RealEstateWebsite #FrontEndDevelopment #JavaScript #Programming #WebDesign #UIUX</p>
                        <div className='py-4'>
                        <a href='https://prakash-zyzz.github.io/RealEstate/'>
                        <button className='px-8 py-2 cursor-pointer bg-[#BAC964] rounded-full text-[16px]'>VIEW</button>
                        </a>
                        
                    </div>
                    </div>
                    <div>
                       <img src={Real} className='w-full h-full hover:rotate-[0.5] shadow-lg shadow-green-50/100 transition-transform duration-300 style={{box-shadow:"#BAC964"}}' />
                    </div>

                </div>

                <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 py-24 px-16'>
                    
                    <div>
                        <h1 className='text-[30px] font-light font-Athiti text-white'>Score <span className='font-extrabold'>Keeper</span></h1>
                        <p className='text-[20px] font-extralight text-[#999999] py-7'>Developed an interactive score keeper card using HTML, CSS, and JavaScript with React.js, allowing two players to track their scores seamlessly. Implemented intuitive functionality for score updates and player management, enhancing user engagement during gameplay</p>
                        <p className='text-[16px] font-light text-[#999999] py-2 '> #WebDevelopment #ReactJS #css #ScoreKeeper #FrontEndDevelopment #JavaScript #Programming #WebDesign #UIUX</p>
                        <div className='py-4'>
                        <a href='https://prakash-zyzz.github.io/ScoreKeeper/'>
                        <button className='px-8 py-2 cursor-pointer bg-[#BAC964] rounded-full text-[16px]'>VIEW</button>
                        </a>
                        
                    </div>
                    </div>
                    <div>
                       <img src={Score} className='w-full h-full hover:rotate-[0.5] shadow-lg shadow-green-50/100 transition-transform duration-300 style={{box-shadow:"#BAC964"}}' />
                    </div>

                </div>

                <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 py-2 px-16'>
                    
                    <div>
                        <h1 className='text-[30px] font-light font-Athiti text-white'>Block <span className='font-extrabold'>Chain</span></h1>
                        <p className='text-[20px] font-extralight text-[#999999] py-7'>Engineered a captivating landing page for a blockchain website using React.js and Tailwind CSS. Leveraged Tailwind CSS's utility-first approach to ensure rapid development and responsiveness across devices</p>
                        <p className='text-[16px] font-light text-[#999999] py-2 '> #WebDevelopment #ReactJS #css #ScoreKeeper #FrontEndDevelopment #JavaScript #Programming #WebDesign #UIUX</p>
                        <div className='py-4'>
                        <a href='https://prakash-zyzz.github.io/BlockChain/'>
                        <button className='px-8 py-2 cursor-pointer bg-[#BAC964] rounded-full text-[16px]'>VIEW</button>
                        </a>
                        
                    </div>
                    </div>
                    <div>
                       <img src={Block} className='w-full h-full hover:rotate-[0.5] shadow-lg shadow-green-50/100 transition-transform duration-300 style={{box-shadow:"#BAC964"}}' />
                    </div>

                </div>
                       
               </div>
            </div>
    </div>
  )
}

export default Projects