 import './ProductList.scss';
 import data from '../../data/productsData.js';
 import Product from '../product/Product.jsx';
 import Filter from '../filter/Filter.jsx';
 import { useState } from 'react';
import { Link } from 'react-router-dom';

 const BeautyCare = (props) => {
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
     <div className='beautyP'>
       <Filter 
         filterItems={filterItems}
         onFilter={handleFilter}
       />

       <div className="products"> 
         {items.map((props) => (
           <Product 
             id={props.id}
             cat={props.cat} 
            //  des={props.des}
             img={props.img} 
             title={props.displayName} 
             price={props.price} 
           />
         ))}
       </div>
       <Link className='a' to='/reval-world-sample3/services'><h4 className="cta">View All</h4></Link>
     </div>
   );
 }

 export default BeautyCare;
