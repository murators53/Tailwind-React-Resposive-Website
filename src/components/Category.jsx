import React from 'react'
import {categories} from '../data/data'
const Category = () => {
    console.log(categories);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12' >
        <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Manu Items</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 py-6 gap-6' >
            {
                categories.map((item, index) => (
                    <div key={index} className=' flex justify-between items-center rounded-lg p-4' >
                        <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                        <img className='w-20' src={item.image} alt={item.name} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category