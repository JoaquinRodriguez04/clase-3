import React from 'react'

const ProductAmount = () => {
  return (
    <div className='flex items-center gap-1'>
      <span>Cantidad:</span>
      <div className='flex gap-2'>
        <span className='font-semibold text-blue'>1 unidad</span>
        <span className='text-gray'>(60 disponibles)</span>
      </div>
    </div>
  )
};

export default ProductAmount;
