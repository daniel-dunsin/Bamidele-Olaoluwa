import React from 'react'
import { services } from '../../assets/constants';
import { Service } from '../../components';


const Services = () => {
  return <section>
    <div className='mb-8' id='services'>
      <h1 className='lg:text-[45px] md:text-[30px] text-[28px] font-playfair'>Services</h1>
      <p className='text-[17px] leading-[27px] max-w-[501px]'>I render services ranging from static graphics design to 3d graphics</p>
    </div>
    <div className='flex flex-wrap justify-between gap-4 md:flex-row flex-col'>
      {
        services.map(service => (
          <Service {...service} key={service.id} />
        ))
      }
    </div>
  </section>
}
export default Services;