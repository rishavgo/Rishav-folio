import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center relative z-10">
      <motion.h2 
      variants={fadeIn('down',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false,amount:0}}
      className="lg:text-lg sm:text-md uppercase text-cyan font-semibold tracking-widest">
        Web Developer
      </motion.h2>
      <motion.h1 
       variants={fadeIn('right',0.4)}
       initial='hidden'
       whileInView='show'
       viewport={{once:false,amount:0}}
      className="md:text-[3rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange drop-shadow-lg">
        Rishav Mahajan
      </motion.h1>
      <motion.p 
       variants={fadeIn('up',0.6)}
       initial='hidden'
       whileInView='show'
       viewport={{once:false,amount:0}}
      className="text-lg text-white opacity-80 leading-relaxed">
        A Passionate Web Developer and Enthusiastic <br />
        coder/Learner.
      </motion.p>
    </div>
  );
};

export default HeroText;
