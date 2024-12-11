import React from 'react'
import './NoteHome.css'
import AddCard from '../Components/AddCard/AddCard'



const NoteHome = () => {
  return (
    <>
      <div className=' dark:bg-[#343434] w-full dark:border-l-[1px] border-l-[#585757]'>
        <AddCard/>
      </div>
    </>
  )
}

export default NoteHome