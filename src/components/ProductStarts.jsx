import React from 'react'

const ProductStarts = () => {
  return (
    <div className='flex gap-1'>
        <span className='text-gray'>4.5</span>
        <span>
            <i class="bi bi-star-fill text-blue text-sm"></i>
            <i class="bi bi-star-fill text-blue text-sm"></i>
            <i class="bi bi-star-fill text-blue text-sm"></i>
            <i class="bi bi-star-fill text-blue text-sm"></i>
            <i class="bi bi-star-half text-blue text-sm"></i>
        </span>
        <span className='text-gray'>(184)</span>
    </div>
  )
}

export default ProductStarts
