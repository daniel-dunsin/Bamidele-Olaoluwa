import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const SingleProject = ({ id, text, images }) => {
    
    return (
        <article className='lg:basis-[30%] md:basis:1/2 basis-1 relative'>
            <div className='relative'>
                <img src={images[0]} alt={text} className='w-full' />
                <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] opacity-0  transition duration-300 hover:opacity-100 flex justify-center items-center flex-col gap-4'>
                    <Link to={`/projects/${id}`}>
                        <h1 className='text-white text-lg font-bold'>{text}</h1>
                        <button className='bg-lightPurple text-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-xl mx-auto'>
                            <FaSearch />
                        </button>
                    </Link>
                </div>
            </div>



        </article>
    )
}

export default SingleProject