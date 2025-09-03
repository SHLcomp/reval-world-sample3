// import './BeautyCare.scss';
// import data from '../../data/latestData.js'; 
// import Product from '../product/Product.jsx';
// import Filter from '../filter/Filter.jsx';
// import { useState } from 'react';

// const BeautyCare = (props) => {
//   const [items, setItems] = useState(data);
//   const filterItems = [...new Set(data.map((value) => value.cat))];

//   // Filtering function
//   const handleFilter = (category) => {
//     if (category === "all") {
//       setItems(data);
//     } else {
//       const newItems = data.filter((item) => item.cat === category);
//       setItems(newItems);
//     }
//   };

//   return (
//     <div className='beautyP'>
//       <Filter 
//         filterItems={filterItems}
//         onFilter={handleFilter}
//       />

//       <div className="products">
//         {items.map((item, i) => (
//           <Product 
//             key={i} 
//             cat={item.cat} 
//             img={item.img} 
//             title={item.title} 
//             price={item.price} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BeautyCare;
