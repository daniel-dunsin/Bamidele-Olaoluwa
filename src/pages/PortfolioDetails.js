import React from 'react'
import SingleProject from '../containers/PortfolioDetails/SingleProject'
import Modal from '../containers/PortfolioDetails/Modal';
const PortfolioDetails = () => {
  return <section className='max-w-[1100px] mx-auto md:px-3 px-4 py-3 flex flex-col gap-y-16'>
    <SingleProject />
    <Modal />
  </section>
}
export default PortfolioDetails;