import React, { useState, useEffect } from 'react';
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (  
    <button 
      className={`rounded-full font-bold text-white border border-cyan flex items-center gap-1 
                 bg-gradient-to-r from-cyan to-green-500 transition-all duration-300
                 ${isMobile ? 'px-3 py-2 text-sm' : 'px-5 py-3 text-lg'}
                 hover:shadow-[0px_0px_20px_0px_rgba(94,206,220,0.8)]`}
    >
      Hire Me
      {!isMobile && <LuArrowDownRight />}
    </button>
  );
}

export default NavbarBtn;
