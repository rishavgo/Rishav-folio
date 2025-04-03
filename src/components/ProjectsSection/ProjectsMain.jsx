import React from 'react';
import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const projects = [
  {
    name: 'Student Community Website',
    Year: "2023",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: 'Blogester 02',   
    Year: "2024",
    align: "left",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id='Projects' className='max-w-[1200px] mx-auto px-4'>

      <motion.div
       variants={fadeIn('up',0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once:false,amount:0}}>
        <ProjectsText />
      </motion.div>
      <div className='flex flex-col md:gap-20 gap-10 max-w-3xl mx-auto mt-12'>
        {projects.map((item, index) => (
          <SingleProject
            key={index}
            name={item.name}
            Year={item.Year}
            align={item.align}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
