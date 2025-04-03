import React from 'react';
import { FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';
import { div } from 'motion/react-client';

const skills = [
    {
        skill: "HTML",
        icon: FaHtml5
    },
    {
        skill: "CSS",
        icon: FaCss3Alt 
    },
    {
        skill: "JavaScript",
        icon: IoLogoJavascript
    },
    {
        skill: "Python",
        icon: FaPython 
    }, 
    {
        skill: "React",
        icon: IoLogoReact
    },
    {
        skill: "Java",
        icon: FaJava
    },
];

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-4 max-w-[1200px] mx-auto'>
            {skills.map((item, index) => (
                <motion.div
                variants={fadeIn('up',`0.${index}`)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false,amount:0}}>
                    <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
                </motion.div>
            ))}
        </div>
    </div>
  );
}

export default AllSkills;
