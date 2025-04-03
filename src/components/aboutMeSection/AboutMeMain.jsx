import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImg from './AboutMeImg'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const AboutMeMain = () => {
  return (
    <div id='About' className='flex flex-col md:flex-row gap-12 px-4 max-w-[1100px] mx-auto mt-[100px] justify-between items-center overflow-hidden'>
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7 }} // Adjusted for better animation trigger
      >
        <AboutMeText />
      </motion.div>
      
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7 }} // Adjusted for better animation trigger
      >
        <AboutMeImg />
      </motion.div>
    </div>
  )
}

export default AboutMeMain;
