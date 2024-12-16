import React from 'react'
import './NoteHome.css'
import AddCard from '../Components/AddCard/AddCard'
import SingleNote from '../Components/SingleNote/SingleNote'
import PinNotePage from './PinNotePage'
import { BsPinAngleFill } from "react-icons/bs";





const NoteHome = () => {
  return (
    <>
        <div className='ml-[380px] mt-[30px]'>
          <AddCard/>
          {/* ============= Pin Notes ================================ */}
          <div>
            <div className='flex items-center gap-[20px] text-[28px] font-poppins font-medium text-[#795252]'>
              <h2 className=''>Pin Notes</h2>
              <BsPinAngleFill />
            </div>
            <hr className='bg-[black]'/>
          </div>
          
          <PinNotePage />
         
          {/* ============= All Notes ================================ */}
          <div>
            <h2 className='text-[28px] font-poppins font-medium text-[gray]'>All Notes</h2>
            <hr className='bg-[black]'/>
          </div>
          <SingleNote/>
        </div>
      
    </>
    
  )
}

export default NoteHome