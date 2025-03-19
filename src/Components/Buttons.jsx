import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiExport } from "react-icons/ci";
import { TfiLayoutGrid2 } from "react-icons/tfi";

const Buttons = () => {
  return (
    <div className='flex items-end py-8 px-3 justify-end gap-4'>
      <button className='px-5 py-3 rounded-lg border-none text-center flex justify-center items-center gap-2 text-white bg-red-400'> <FaPlus /> Regiter</button>
      <div className='px-5 py-2.5 rounded-lg border-2 flex items-center justify-center gap-2 border-gray-500 text-center bg-transparent'> <CiExport />
       Export</div>
      <div className='px-5 py-2.5 rounded-lg border-2 flex items-center justify-center gap-2 border-gray-500 text-center bg-transparent'><TfiLayoutGrid2 /> Layout</div>
    </div>
  )
}

export default Buttons
