import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const SingleExperience = ({ experience }) => {
  return (
    <motion.div 
    variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once:false,amount:0}}
    className="flex-1 min-w-[250px] max-w-[300px] border-2 border-orange border-dashed rounded-2xl p-6">
      <p className="font-bold text-cyan text-lg">{experience.Position}</p>
      <p className="text-orange text-sm">{experience.Project}</p>
      <p className="text-lightGrey text-sm">{experience.Date}</p>
      <ul className="list-disc mt-4 pl-6 text-white text-sm">
        {experience.Responsibilities.map((resp, index) => (
          <li key={index} className="leading-relaxed">{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
