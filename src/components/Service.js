import React from 'react'

const Service = ({color, text, icon}) => {
  return <article className={`text-[20px] flex-1 flex flex-col px-4 py-6 shadow-md rounded-md gap-y-6 border-b-4 border-b-${color} md:max-w-auto w-[300px] md:basis-1 basis-1/2 mr-auto`}>
    <i className={`text-[26px] text-${color}`}>{icon}</i>
    <p className='cursor-pointer'>{text}</p>
  </article>
}

export default Service