import React from 'react';
import { Link } from 'react-scroll';

const links = [
    { link: "About Me", Section: "About" },
    { link: "Skills", Section: "Skills" },
    { link: "Experience", Section: "Experience" },
    { link: "Projects", Section: "Projects" },
    { link: "Contact", Section: "Contact" },
];

const NavbarLinks = () => {
    return (
        <ul className='flex flex-col lg:flex-row gap-6 text-white font-bold text-center p-4 lg:p-0'>
            {links.map((item, index) => (
                <li key={index} className='relative group'>
                    <Link 
                        to={item.Section} 
                        smooth={true} 
                        spy={true} 
                        duration={500} 
                        offset={-70} // Adjusted for navbar height
                        className='cursor-pointer text-white hover:text-cyan transition-all duration-300 block px-4 py-2'
                    >
                        {item.link}
                    </Link>
                    {/* Underline Effect */}
                    <span className='absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-cyan transition-all duration-300'></span>
                </li>
            ))}
        </ul>
    );
}

export default NavbarLinks;
