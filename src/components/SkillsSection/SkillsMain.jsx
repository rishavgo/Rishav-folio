import React from 'react';
import SkillsText from './SkillsText';
import AllSkills from './AllSkills';
import AllSkillsSM from './AllSkillsSM';
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const SkillsMain = () => {
  return (
    <div id='Skills'>
        <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] flex flex-col items-center gap-10 overflow-hidden'>
          <motion.div 
          variants={fadeIn('down',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once:false,amount:0}}>
          <SkillsText />
          </motion.div>
            {/* Large screens: Show AllSkills */}
            <div className='hidden lg:flex justify-center'>
                <AllSkills />
            </div>
            {/* Small screens: Show AllSkillsSM */}
            <div className='lg:hidden flex justify-center'>
                <AllSkillsSM />
            </div>
        </div>
    </div>
  );
}

export default SkillsMain;
