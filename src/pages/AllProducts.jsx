import React from "react";
import Navbar from "../componets/navbar/Navbar";
import { AllProductsList } from "../componets/allProductsList/AllProductsList";
import { AllProductsInfo } from "../componets/allProductsInfo/AllProductsInfo";
import Footer from "../componets/footer/Footer";

export const AllProducts = () => {
  return (
    <div>
      <Navbar />
      <AllProductsList />
      <AllProductsInfo />
      <Footer/>
    </div>
  );
};
