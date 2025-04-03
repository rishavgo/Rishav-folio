import React from 'react';

const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown text-center mt-16">
      <p className="hidden md:block">Fast Learner</p>
      <p className="hidden md:block">Team Worker</p>
      <p>Eager Learner</p>
    </div>
  );
};

export default SubHeroSection;
