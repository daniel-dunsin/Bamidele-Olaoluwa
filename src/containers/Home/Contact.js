import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();
    emailjs.sendForm('Olaoluwa ', 'template_gwx852b', form.current, '2bUW6ag4oiu3J9Vid').then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    })
  }

  return (
    <section className='mb-16' id='contact'>
      <div className='mb-8'>
        <h1 className='lg:text-[45px] md:text-[30px] text-[28px] font-playfair'>Contact Me</h1>
        <p className='text-[17px] leading-[27px] max-w-[515px]'>I'm open to work and collaborations, send me a message</p>
      </div>


      <form ref={form} onSubmit={sendEmail} className='max-w-[700px] border border-1 rounded-md px-4 py-6'>
        <article className='flex flex-col gap-y-2'>
          <label className='text-[18px]' htmlFor="username">Name</label>
          <input className='w-full text-[16px] border-2 rounded-md px-4 py-2 outline-none focus:border-lightPurple' type="text" name='user_name' id='username' placeholder='Enter your name' />
        </article>
        <article className='flex flex-col gap-y-2'>
          <label className='text-[18px]' htmlFor="email">Email</label>
          <input className='w-full text-[16px] border-2 rounded-md px-4 py-2 outline-none focus:border-lightPurple' type="email" name='user_email' id='email' placeholder='Enter your email' />
        </article>
        <article className='flex flex-col gap-y-2'>
          <label className='text-[18px]' htmlFor="message">Message</label>
          <textarea name="message" id="message" className='w-full text-[16px] border-2 rounded-md px-4 py-2 outline-none focus:border-lightPurple resize-none h-[250px]' placeholder='Message...' />
        </article>
        <input type="submit" value="Send" className='mt-4 w-[150px] py-3 text-center text-black border border-1 border-black transition hover:text-white hover:border-lightPurple hover:bg-lightPurple text-[16px] font-karla rounded-md' />
      </form>
    </section>
  )
}

export default Contact