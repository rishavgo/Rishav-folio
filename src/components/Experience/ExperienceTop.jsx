import React from 'react';
import ExperienceTopLeft from './ExperienceTopLeft';
import ExperienceTopRight from './ExperienceTopRight';
import ExperienceTopMiddle from './ExperienceTopMiddle';

const ExperienceTop = () => {
  return (
    <div className="flex flex-col lg:flex-row sm:flex-col gap-4 items-center justify-center mt-10">
      <ExperienceTopLeft />
     <ExperienceTopMiddle/>
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;
