import React from 'react';
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';


const SingleProject = ({ name, Year, align, image, link }) => {
  return (
    <motion.div 
     variants={fadeIn('up',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once:false,amount:0}}
    className={`flex w-full sm:flex-col-reverse items-center gap-6 ${align === "left" ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between`}>
      
      {/* Project Info */}
      <div className="md:w-[48%] sm:w-full text-center md:text-left">
        <h2 className="text-3xl font-semibold text-orange">{name}</h2>
        <h2 className="text-lg font-light text-gray-300 font-special mt-1">{Year}</h2>
        <a href={link} className="inline-flex items-center gap-2 text-lg text-cyan hover:text-orange transition-all duration-300 cursor-pointer mt-3 md:mt-4">
          View <BiSolidRightTopArrowCircle className="text-xl" />
        </a>
      </div>

      {/* Project Image */}
      <div className="md:w-[48%] sm:w-full max-h-[250px] rounded-xl overflow-hidden hover:scale-[1.05] transform transition-all duration-500 relative border border-gray-500 shadow-lg">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-20 transition-all duration-500"></div>
        <img src={image} alt="Project Image" className="w-full h-full object-cover" />
      </div>
      
    </motion.div>
  );
};  

export default SingleProject;
