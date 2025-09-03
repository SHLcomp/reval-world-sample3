import React from "react";
import productsData from "../../data/ProductsData";
import Product from "../product/Product";
import Navbar from "../navbar/Navbar";
import './AllCat.scss';

export const AllCat = (props) => {
  return (
    <>
    <Navbar/>
    <div className="all-cat container">
      {productsData.map((item, i) => {
        if (props.cat === item.cat) {
          return (
            <Product
              key={i}
              id={item.id}
              cat={item.cat}
              //  des={item.des}
              img={item.img}
              title={item.displayName}
              price={item.price}
            />
          );
        } else{
            return null;
        }
      })}
    </div>
    </>
  );
};
export default AllCat;