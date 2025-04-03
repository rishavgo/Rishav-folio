import React from 'react';
import { FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';   

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

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item, index) => (
            <motion.div 
             variants={fadeIn('up',0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once:false,amount:0.7}}
            key={index} className='flex flex-col items-center'>
                <item.icon className='text-7xl text-orange' />
                <p className='text-center mt-4 text-white'>{item.skill}</p>
            </motion.div>
        ))}
    </div>
  );
}

export default AllSkillsSM;
