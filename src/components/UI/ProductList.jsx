import React from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {
 return(
  <>
  {DataTransfer.map((item)=>(
    <ProductCard item={item}/>
  ))}
  </>
 );
};

export default ProductList;