import React,{useState,useEffect} from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import {Link} from "react-scroll"


const Navbar = () => {
   const [scrolled,setScrolled] = useState(false);
   const [nav,setNav] = useState(false);

   const handleNav = () =>{
    setNav(!nav)
   }

   useEffect(()=>{
    const handleScroll = ()=>{
        setScrolled(window.scrollY>0);
    }
        window.addEventListener("scroll",handleScroll)
    },[])
    
  return (
    <div className={`flex w-full h-20 cursor-pointer  justify-between items-center z-10 px-4 ${scrolled ? "fixed bg-white text-black" :"absolute" } transition-all duration-1000`}>
        {/* Destop view */}
        <ul className='hidden md:flex cursor-pointer ml-[31%] '>
            <li className={`px-4 ${scrolled?"hover:text-[#BAC964]":"text-white"} font-normal`}><Link to="home"  smooth={true}  duration={500} >HOME</Link></li>
            <li className={`px-4 ${scrolled?"hover:text-[#BAC964]":"text-white"} font-normal`}><Link to="about"  smooth={true}  duration={500} >ABOUT</Link></li>
            <li className={`px-4 ${scrolled?"hover:text-[#BAC964]":"text-white"} font-normal`}><Link to="skills"  smooth={true}  duration={500} >SKILLS</Link></li>
            <li className={`px-4 ${scrolled?"hover:text-[#BAC964]":"text-white"} font-normal`}><Link to="projects"  smooth={true}  duration={500} >PROJECTS</Link></li>
            <li className={`px-4 ${scrolled?"hover:text-[#BAC964]":"text-white"} font-normal`}><Link to="contact"  smooth={true}  duration={500} >CONTACT</Link></li>
        </ul>

        {/* mobile view */}
        <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? <AiOutlineClose className='text-black' size={20}/>:<AiOutlineMenu className='text-white' size={20}/>}
        </div>

        <div className={nav ? 'absolute text-black left-[0] top-0 w-full bg-white px-4 py-7 flex flex-col justify-center items-center' : 'hidden md:hidden'} >
             <ul>
              <li className='py-7 hover:text-[#BAC964] cursor-pointer'><Link to="home"  smooth={true}  duration={500} >HOME</Link></li>
              <li className='py-7 hover:text-[#BAC964] cursor-pointer'><Link to="about"  smooth={true}  duration={500} >ABOUT</Link></li>
              <li className='py-7 hover:text-[#BAC964] cursor-pointer'><Link to="skills"  smooth={true}  duration={500} >SKILLS</Link></li>
              <li className='py-7 hover:text-[#BAC964] cursor-pointer'><Link to="projects"  smooth={true}  duration={500} >PROJECTS</Link></li>
              <li className='py-7 hover:text-[#BAC964] cursor-pointer'><Link to="contact"  smooth={true}  duration={500} >CONTACT</Link></li>
             </ul>
        </div>
    
</div>

  )
}

export default Navbar