import React from 'react'
import Productname from './Productname';
import ProductStarts from './ProductStarts';
import ProductPrice from './ProductPrice';
import ProductDesc from './ProductDesc';
import ProductFavorite from './ProductFavorite';

const ProductColDesc = () => {
  return (
    <section className='flex-[2.5] flex flex-col gap-5'>
        <ProductFavorite/>
        <Productname/>
        <ProductStarts/>
        <ProductPrice/>
        <ProductDesc/>
    </section>
  )
};

export default ProductColDesc;
