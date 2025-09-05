import "./AllProductsList.scss";
import data from "../../data/productsData";
import Product from "../product/Product";
import Filter from "../filter/Filter";
import { useState } from "react";


export const AllProductsList = () => {
   const [items, setItems] = useState(data);
   const filterItems = [...new Set(data.map((value) => value.cat))];

    // Filtering function
   const handleFilter = (category) => {
     if (category === "all") {
       setItems(data);
     } else {
       const newItems = data.filter((item) => item.cat === category);
       setItems(newItems);
     }
   };
  return (
    <div className="allP">

        
      <div className="filter">
        <Filter 
         filterItems={filterItems}
         onFilter={handleFilter}
       />
      </div>


      <div className="products">
        {items.map((props) => (
           <Product 
             id={props.id}
             cat={props.cat} 
            //  des={props.des}
             img={props.img} 
             displayName={props.displayName} 
           />
         ))}
      </div>
    </div>
  );
};

export default AllProductsList;
