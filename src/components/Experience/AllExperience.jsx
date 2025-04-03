import React from 'react';
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const experiences = [
  {
    Position: 'Front-End Developer',
    Project: 'Personal',
    Date: '2023-09-02',
    Responsibilities: [
      'Implementing reusable components',
      'Improving performance of web applications',
      'Generating new ideas for better user experience'
    ],
  },
  {
    Position: 'Model Trainer',
    Project: 'Personal',
    Date: '2024-07-22',
    Responsibilities: [
      'Experimenting with different algorithms and architectures',
      'Preprocessing and cleaning large datasets',
      'Deploying trained models for real-world applications',
    ],
  },
  {
    Position: 'Web Developer',
    Project: 'Personal',
    Date: '2024-12-14',
    Responsibilities: [
      'Developing and maintaining responsive web applications',
      'Implementing reusable and efficient UI components',
      'Optimizing website performance and load times',
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 mt-8">  
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
              className="ml-4"
            >
              <FaArrowRight className="text-4xl text-orange hidden lg:block" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperience;
