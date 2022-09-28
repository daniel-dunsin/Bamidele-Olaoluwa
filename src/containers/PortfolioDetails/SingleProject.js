import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { projects } from '../../assets/constants'
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
const SingleProject = () => {
  const { id } = useParams()
  const { text, images, description, toolsUsed, link } = projects.find(project => project.id == id)
  const [count, setCount] = useState(0);
  const image = images[count];
  const { openModal, setModalImage } = useGlobalContext();
  const increaseCount = () => {
    if (count === images.length - 1) {
      setCount(0);
    } else {
      setCount(count => count + 1);
    }
  }
  const decreaseCount = () => {
    if (count === 0) {
      setCount(images.length - 1);
    } else {
      setCount(count => count - 1);
    }
  }
  return <article className='flex flex-col lg:flex-row justify-between items-start w-full gap-8 mb-12'>

    <div className='flex-[1.5] bg-red-500 max-w-[768px] rounded-md overflow-hidden relative'>
      <img src={image} className='w-full' alt="" />
      <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] p-4 flex items-center justify-between opacity-0 transition duration-300 hover:opacity-100'>


        <span className='w-[50px] h-[50px] flex bg-[rgba(0,0,0,.7)] transition hover:bg-[rgba(0,0,0,0.9)] text-white text-xl justify-center items-center rounded-full z-20' onClick={decreaseCount}>
          <FaChevronLeft />
        </span>


        <span className='w-[50px] h-[50px] flex bg-[rgba(0,0,0,.7)] transition hover:bg-[rgba(0,0,0,0.9)] text-white text-xl justify-center items-center rounded-full z-20' onClick={() => {
          openModal();
          setModalImage(image);
        }}>
          <FaExpand />
        </span>


        <span className='w-[50px] h-[50px] flex bg-[rgba(0,0,0,.7)] transition hover:bg-[rgba(0,0,0,0.9)] text-white text-xl justify-center items-center rounded-full z-20' onClick={increaseCount}>
          <FaChevronRight />
        </span>


      </div>
    </div>


    <div className='flex-[0.7]'>
      <h1 className='font-bold text-lightPurple text-3xl uppercase mb-6'>Project Information</h1>
      <article className='flex flex-row gap-4 items-center text-lg mb-3'>
        <p className='font-bold'>Project Name:</p>
        <p>{text}</p>
      </article>
      <article className='flex flex-row gap-4 items-center text-lg mb-3'>
        <p className='font-bold'>Tools Used:</p>
        <div className='flex flex-row gap-4 items-center mb-3'>
          {
            toolsUsed.map(tool => (
              <img src={tool.img} className='w-[32px] h-[32px]' alt={tool.name} key={tool.name} />
            ))
          }
        </div>
      </article>
      <article className='flex flex-row gap-4 items-center text-lg'>
        <p className='font-bold'>Project URL:</p>
        <a href={link} className='underline text-lightPurple'>View Project</a>
      </article>

      <p className='text-gray-700 mt-9 text-lg'>{description}</p>
    </div>
  </article>
}

export default SingleProject