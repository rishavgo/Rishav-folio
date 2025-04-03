import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start items-center md:text-left text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>
        Rishav Mahajan is a driven college student pursuing a degree in Computer Science. Passionate about technology and innovation, he balances academics with hands-on projects in web development and coding.
        Actively involved in campus tech clubs and hackathons, Rishav enjoys transforming ideas into functional solutions. 
        When not debugging code, he explores new frameworks, contributes to open-source projects, and aspires to build tools that simplify everyday challenges.
      </p>
      <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>
        My Projects
      </button>
    </div>
  )
}

export default AboutMeText
