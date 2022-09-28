import React from 'react'
import { skills } from '../../assets/constants'

const Skills = () => {
  return <section id='skills'>
    <div className='mb-4'>
      <h1 className='lg:text-[45px] md:text-[30px] text-[28px] font-playfair'>My Skills</h1>
      <p className='text-[17px] leading-[27px] max-w-[501px]'>I have built up a diverse range of skills to ensure i keep myself up-to-date in this rapidly changing industry</p>
    </div>

    <div className='flex flex-col gap-y-6 mt-4'>
      {
        skills.map(skill => (
          <article key={skill.id} className='flex flex-row gap-x-4 items-center'>
            <div className='w-[40px] h-[40px]'>
              <img src={skill.img} alt={skill.skill} className="w-full h-full" />
            </div>
            <p className='text-[18px] cursor-pointer'>{skill.skill}</p>
          </article>
        ))
      }
    </div>
  </section>
}

export default Skills