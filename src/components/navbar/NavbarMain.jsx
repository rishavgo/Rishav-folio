import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarBtn from './NavbarBtn';
import NavbarLinks from './NavbarLinks';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 mt-2'>
            <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-full border border-orange'>
                <NavbarLogo />  
                
                {/* Desktop Navigation */}
                <div className='hidden lg:flex items-center gap-6'>
                    <NavbarLinks />
                    <NavbarBtn />
                </div>

                {/* Mobile Controls */}
                <div className='flex lg:hidden items-center gap-4'>
                    <NavbarBtn />
                    <button 
                        className='p-3 border border-orange rounded-full text-white' 
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Fixing Alignment & Animation) */}
            <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 
                            ${menuOpen ? 'opacity-100 max-h-[300px] py-4' : 'opacity-0 max-h-0'} 
                            bg-cyan/20 backdrop-blur-lg rounded-lg border border-cyan/30 overflow-hidden`}>
                <NavbarLinks />
            </div>
        </nav>
    );
}

export default NavbarMain;
