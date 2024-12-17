import React from 'react'
import './NoteHome.css'
import AddCard from '../Components/AddCard/AddCard'
import SingleNote from '../Components/SingleNote/SingleNote'
import PinNotePage from './PinNotePage'
import { BsPinAngleFill } from "react-icons/bs";





const NoteHome = () => {
  return (
    <>
        <div className=' mt-[30px]'>
          <div className='ml-[380px]'>
          <AddCard/>
          </div>
          {/* ============= Pin Notes ================================ */}
          <div>
            <div className='flex items-center gap-[20px] text-[28px] font-poppins font-medium text-[#795252] ml-[380px]'>
              <h2 className=''>Pin Notes</h2>
              <BsPinAngleFill />
            </div>
            <hr className='bg-[black] ml-[380px]'/>
          </div>
          
          <PinNotePage />
         
          {/* ============= All Notes ================================ */}
          <div>
            <h2 className='text-[28px] font-poppins font-medium text-[gray] ml-[380px]'>All Notes</h2>
            <hr className='bg-[black] ml-[380px]'/>
          </div>
          <SingleNote/>
        </div>
      
    </>
    
  )
}

export default NoteHome