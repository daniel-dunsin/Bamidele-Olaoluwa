import React from 'react'
import { Header, Skills, Services, Portfolio, Contact } from '../containers'
const Home = () => {
  return <main className='max-w-[1200px] mx-auto md:px-3 px-4 py-3 flex flex-col gap-y-16'>
    <Header />
    <Skills />
    <Services />
    <Portfolio />
    <Contact />
  </main>
}

export default Home