import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { TiEyeOutline } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({email, name, phone, image, lastInvoice}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex gap-4 items-center justify-between space-x-4">

<div className='flex items-center gap-8'>
<img className='rounded-full h-10 w-10 object-cover' src={image} alt="" />
<h2 className="text-lg font-semibold">{name}</h2>
</div>
    <div className='flex items-center gap-20'>
      
      <p className="text-sm text-gray-500">Last Invoice: {lastInvoice}</p>
      <div className='flex gap-3'>
        <MdOutlineEdit className='text-2xl text-gray-600' />
        <TiEyeOutline className='text-2xl text-gray-600' />
        <BsThreeDotsVertical className='text-2xl text-gray-600' />
    </div>
    </div>
   
   
  </div>
  )
}

export default Card
