import React from 'react'

const ProductFavorite = () => {
  return (
    <div className='flex justify-between text-gray font-medium'>
        <div className='flex gap-1'>
            <span>Nuevo</span>
            <span>|</span>
            <span className='text-blue'>+850 vendidos</span>
        </div>
        <i class="bi bi-heart text-lg hover:text-blue hover:cursor-pointer"></i>
    </div>
  )
};

export default ProductFavorite;
