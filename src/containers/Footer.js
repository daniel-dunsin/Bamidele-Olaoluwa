import React from 'react'
import { FaPhone, FaEnvelope, FaMapPin } from 'react-icons/fa';
const Footer = () => {
    return <footer className='md:px-3 px-4 py-4 bg-white min-h-[100px]'>
        <div className='max-w-[1200px] mx-auto flex md:flex-row flex-col gap-4 justify-between md:items-center'>
            <article className='flex flex-row gap-x-2 items-center'>
                <i className='text-lightPurple text-[20px] font-bold'><FaPhone /></i>
                <a href="tel:+2348118159882">+2348118159882</a>
            </article>
            <article className='flex flex-row gap-x-2 items-center'>
                <i className='text-lightPurple text-[20px] font-bold'><FaEnvelope /></i>
                <a href="mailto:bamideleolaoluwa503@gmail.com">bamideleolaoluwa503@gmail.com</a>
            </article>
            <article className='flex flex-row gap-x-2 items-center'>
                <i className='text-lightPurple text-[20px] font-bold'><FaMapPin /></i>
                <p>Ogun State, Nigeria</p>
            </article>
        </div>
        <p className='border-t border-t-gray-600 w-full max-w-[1200px] mx-auto mt-7 text-center pt-2'>
            &copy; Bamidele Olaoluwa {new Date().getFullYear()}
        </p>

    </footer>
}

export default Footer