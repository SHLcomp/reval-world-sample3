import './ProductList.scss';
import data from '../../data/productsData.js';
import Product from '../product/Product.jsx';
import Filter from '../filter/Filter.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BeautyCare = () => {
  // Take only the first 4 items
  const limitedData = data.slice(0, 4);

  const [items, setItems] = useState(limitedData);

  const filterItems = [...new Set(limitedData.map((value) => value.cat))];

  // Filtering function
  const handleFilter = (category) => {
    if (category === "all") {
      setItems(limitedData);
    } else {
      const newItems = limitedData.filter((item) => item.cat === category);
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
            key={props.id}
            id={props.id}
            cat={props.cat} 
            img={props.img} 
            displayName={props.displayName} 
          />
        ))}
      </div>

      <Link className='a' to='/reval-world-sample3/allproducts'>
        <h4 className="cta">View All</h4>
      </Link>
    </div>
  );
};

export default BeautyCare;
