import React from 'react'
import { SingleProject } from '../../components';
import { projects } from '../../assets/constants'
const Portfolio = () => {
  return <section>
    <div className='mb-8' id='portfolio'>
      <h1 className='lg:text-[45px] md:text-[30px] text-[28px] font-playfair'>My Works</h1>
      <p className='text-[17px] leading-[27px] max-w-[515px]'>I have experience working on often time-sensitive and challenging projects that require creative and technical capabilities</p>
    </div>
    <div className='flex flex-wrap md:flex-row flex-col gap-8 justify-between'>
      {
        projects.map((project) => (
          <SingleProject key={project.id} {...project} />
        ))
      }
    </div>
  </section>
}

export default Portfolio