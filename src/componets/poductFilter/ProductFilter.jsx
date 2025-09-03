import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../../data/productsData.js';
import './ProductFilter.scss';
import ProductDisplay from '../productDisplay/ProductDisplay';
import Navbar from '../navbar/Navbar.jsx';

const ProductFilter = () => {
    const {productId} = useParams();
    const product = data.find((e)=> e.id === Number(productId));


  return (
    <div className='pFilter'>
        <Navbar />
        <ProductDisplay product={product}/>
    </div>
  )
}
export default ProductFilter;