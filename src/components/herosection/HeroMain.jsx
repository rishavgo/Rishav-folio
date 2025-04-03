import React from 'react';
import HeroText from './HeroText';
import HeroPic from './HeroPic';


const HeroMain = () => {
  return (
    <div className="pt-[10rem] pb-16"> {/* Increased padding from 5rem to 7rem */}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-10">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;

