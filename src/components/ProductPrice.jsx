import React from 'react'

const ProductPrice = () => {
  return (
    <div className='flex flex-col gap-1'>
        <span className='text-base line-through text-gray'>$330.100</span>
        <div className='flex gap-3'>
            <span className='text-2xl'>$313.595</span>
            <span className='text-lg text-blue'>5% OFF</span>
        </div>
        <span className='text-xl'>en 12x $57.628</span>
    </div>
  )
};

export default ProductPrice;
