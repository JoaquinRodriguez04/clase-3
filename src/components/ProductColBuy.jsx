import React from 'react';
import ProductShipping from './ProductShipping';
import ProductAvailableStock from './ProductAvailableStock';
import ProductAmount from './ProductAmount';
import BtnBuy from './BtnBuy';
import BtnAddtoCart from './BtnAddtoCart';

const ProductColBuy = () => {
  return (
    <div className='flex-[1] flex flex-col gap-5 items-start'>
        <ProductShipping/>
        <ProductAvailableStock/>
        <ProductAmount/>
        <BtnBuy/>
        <BtnAddtoCart/>
    </div>
  )
};

export default ProductColBuy;
