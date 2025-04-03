import React from 'react';
import ExperienceInfo from './ExperienceInfo';

const ExperienceTopLeft = () => {
  return (
    <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[35%] xl:w-[30%] bg-[#1a1a1a] border border-gray-700 p-6 rounded-lg shadow-lg">
      <p className="text-orange font-bold uppercase text-3xl tracking-wide text-center">
        Since 2023
      </p>

      <div className="flex justify-center items-center gap-6">
        <ExperienceInfo number="1.5" text="Years" />
        <p className="font-bold text-5xl text-lightBrown">|</p>
        <ExperienceInfo number="6" text="Websites & Models" />
      </div>

      <p className="text-center text-gray-300 text-lg leading-relaxed">
        Passionate about crafting modern web experiences with React.js and 
        developing ML models using cutting-edge libraries.
      </p>

      <div className="border-t-2 border-gray-500 w-full mt-4 pt-4 text-center">
        <ExperienceInfo number="$0" text="Freelance & Personal Projects" />
      </div>
    </div>
  );
};

export default ExperienceTopLeft;
