import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [nav, setNav] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = () => {
        setNav(!nav);
        document.body.style.overflow = nav ? 'auto' : 'hidden';
    };

    const handleLinkClick = () => {
        setNav(false);
        document.body.style.overflow = 'auto';
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <div className={`flex w-full h-20 cursor-pointer justify-between items-center z-10 px-4 ${scrolled && !isMobile ? 'fixed bg-white text-black' : 'absolute'}`}>
            {/* Desktop view */}
            <ul className={`hidden md:flex cursor-pointer ml-[31%] ${scrolled ? 'text-black' : 'text-white'}`}>
                <li className={`px-4 font-normal ${scrolled ? 'text-black hover:text-[#BAC964]' : 'text-white'}`}>
                    <Link to='home' smooth={true} duration={500} onClick={handleLinkClick}>
                        HOME
                    </Link>
                </li>
                <li className={`px-4 font-normal ${scrolled ? 'text-black hover:text-[#BAC964]' : 'text-white'}`}>
                    <Link to='about' smooth={true} duration={500} onClick={handleLinkClick}>
                        ABOUT
                    </Link>
                </li>
                <li className={`px-4 font-normal ${scrolled ? 'text-black hover:text-[#BAC964]' : 'text-white'}`}>
                    <Link to='skills' smooth={true} duration={500} onClick={handleLinkClick}>
                        SKILLS
                    </Link>
                </li>
                <li className={`px-4 font-normal ${scrolled ? 'text-black hover:text-[#BAC964]' : 'text-white'}`}>
                    <Link to='projects' smooth={true} duration={500} onClick={handleLinkClick}>
                        PROJECTS
                    </Link>
                </li>
                <li className={`px-4 font-normal ${scrolled ? 'text-black hover:text-[#BAC964]' : 'text-white'}`}>
                    <Link to='contact' smooth={true} duration={500} onClick={handleLinkClick}>
                        CONTACT
                    </Link>
                </li>
            </ul>

            {/* Mobile view */}
            <div onClick={handleNavClick} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-black' size={20} /> : <AiOutlineMenu className='text-white' size={20} />}
            </div>

            <ul className={nav ? 'absolute text-black left-[0] top-0 w-full bg-white px-4 py-7 flex flex-col justify-center items-center' : 'hidden md:hidden'}>
                <li className='py-7 hover:text-[#BAC964] cursor-pointer'>
                    <Link to='home' smooth={true} duration={500} onClick={handleLinkClick}>
                        HOME
                    </Link>
                </li>
                <li className='py-7 hover:text-[#BAC964] cursor-pointer'>
                    <Link to='about' smooth={true} duration={500} onClick={handleLinkClick}>
                        ABOUT
                    </Link>
                </li>
                <li className='py-7 hover:text-[#BAC964] cursor-pointer'>
                    <Link to='skills' smooth={true} duration={500} onClick={handleLinkClick}>
                        SKILLS
                    </Link>
                </li>
                <li className='py-7 hover:text-[#BAC964] cursor-pointer'>
                    <Link to='projects' smooth={true} duration={500} onClick={handleLinkClick}>
                        PROJECTS
                    </Link>
                </li>
                <li className='py-7 hover:text-[#BAC964] cursor-pointer'>
                    <Link to='contact' smooth={true} duration={500} onClick={handleLinkClick}>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
