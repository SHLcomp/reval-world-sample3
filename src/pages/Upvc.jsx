import React from "react";
import Navbar from "../componets/navbar/Navbar";
import Banner from "../componets/banner/Banner";
import Footer from "../componets/footer/Footer";
import { WhatIsUPVC } from "../componets/upvc/WhatIsUPVC";
import WhyUPVC from '../componets/upvc/WhyUPVC'

export const Upvc = () => {
  return (
    <div>
      <Banner/>
      <Navbar />
      <WhatIsUPVC />
      <WhyUPVC />
      <Footer/>
    </div>
  );
};
export default Upvc;
