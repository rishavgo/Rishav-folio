import React from 'react';
import { PiHexagonThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const HeroPic = () => {
  return (
    <motion.div 
      initial={{ scale: 0.95 }} 
      animate={{ scale: 1 }} 
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      className="relative flex items-center justify-center h-full mt-6"
      style={{
        boxShadow: "0px 0px 40px rgba(0, 255, 255, 0.5), 0px 0px 40px rgba(255, 165, 0, 0.5)"
      }}
    >
      {/* Glowing Hexagon Background */}
      <motion.div 
        className="absolute flex justify-center items-center -z-10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <PiHexagonThin 
          className="md:h-[85%] sm:h-[95%] min-h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" 
        />
      </motion.div>

      {/* Hexagonal Frame with Dual-Color Background */}
      <div className="relative flex items-center justify-center p-2 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-lg">
        <motion.div 
          variants={fadeIn('left', 0.2)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-[230px] h-[230px] clip-hexagon overflow-hidden border-4 border-black"
        >
          {/* Profile Image Inside Hexagon */}
          <motion.img 
            src="/images/ris.png" 
            alt="Rishav Mahajan" 
            className="w-full h-full object-cover"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
