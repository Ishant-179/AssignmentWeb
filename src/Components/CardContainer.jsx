import React from 'react'
import Card from './Card'
import Data from '../assets/Data'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import Buttons from './Buttons';
import { LuUserRound } from "react-icons/lu";

const CardContainer = () => {
  return (
    <div>
      <Buttons />
      <div className='heading flex justify-between items-center px-9'>
  <div className='flex gap-4 items-center justify-center'>
  <LuUserRound className='text-2xl text-gray-500 mb-6' />
  <h1 className="text-2xl text-gray-500 font-medium mb-6">Customer</h1>
 <div className='flex flex-col mb-6 text-gray-500 items-center justify-center'>
 <MdKeyboardArrowUp />
 <MdKeyboardArrowDown />
 </div>
  </div>
 <div className='flex items-center gap-20'>
 <div className='flex items-center gap-5'>
  <GrNotes className='text-xl mb-6 text-gray-500' />
  <h1 className="text-2xl text-gray-500 mb-6">Last invoice</h1>
  </div>
  <div>
  <h1 className="text-2xl text-gray-500 mb-6">Action</h1>
  </div>
   </div>
 </div>
    <div className="space-y-4">
      {Data.map(Data => (
        <Card
          key={Data.id}
          name={Data.name}
          email={Data.email}
          phone={Data.phone}
          lastInvoice={Data.lastInvoice}
          image={Data.image}
        />
      ))}
    </div>
    </div>
  )
}

export default CardContainer
