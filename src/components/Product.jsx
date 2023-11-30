import React from 'react';
import card from '../imgs/imgGraphicCard.webp';

const Product = () => {
  return (
    <figure>
        <img src={card} className='w-[30rem]' alt="img-graphic-card" />
    </figure>
  )
};

export default Product;
