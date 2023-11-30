import React from 'react';
import icon from '../imgs/icon.png';

const ProductAvailableStock = () => {
  return (
    <div>
        <p className='font-semibold'>Stock disponible</p>
        <div className='flex items-center gap-2'>
            <span className='text-gray'>Almacenado y enviado por</span>
            <div className='object-cover w-[2rem] h-[2rem]'>
              <img src={icon} alt="icon-imaginary-shipping" />
            </div>
        </div>
    </div>
  )
};

export default ProductAvailableStock;
