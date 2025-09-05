import React from "react";
import Navbar from "../componets/navbar/Navbar";
import { AllProductsList } from "../componets/allProductsList/AllProductsList";
import { AllProductsInfo } from "../componets/allProductsInfo/AllProductsInfo";

export const AllProducts = () => {
  return (
    <div>
      <Navbar />
      <AllProductsList />
      <AllProductsInfo />
    </div>
  );
};
