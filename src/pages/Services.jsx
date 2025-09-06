import React from 'react'
import Navbar from '../componets/navbar/Navbar';
import Banner from '../componets/banner/Banner';
import Footer from '../componets/footer/Footer';
import Types from '../componets/services/Types';

export const Services = () => {
  return (
    <div>
        <Banner />
        <Navbar />
        <Types />

        <Footer />
    </div>
  )
}

export default Services;