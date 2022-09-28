import React from 'react'
import { useGlobalContext } from '../../context'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
    const { modalOpen, modalImg, closeModal } = useGlobalContext();
    return modalOpen && <section className='z-30 fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center'>
        <i className='w-[40px] h-[40px] bg-[rgba(0,0,0,0.8)] flex justify-center items-center text-white text-[22px] fixed md:top-[30px] md:right-[50px] top-[30px] right-[30px]' onClick={closeModal}>
            <FaTimes />
        </i>
        <div className='w-[90vw] max-w-[600px] mx-auto'>
            <img src={modalImg} alt="" className='w-full h-full scale-up' />
        </div>
    </section>
}

export default Modal