import React from 'react'
import Navbar from '../componets/navbar/Navbar';
import Banner from '../componets/banner/Banner';

export const Epd = () => {
  return (
    <div>
        <Banner />
        <Navbar />
        {/* 
        detailed information about EPD {
  - what is it?
  - why does it matter to a contractor?
  - why does it matter to a customer?
}
        */}
    </div>
  )
}

export default Epd;