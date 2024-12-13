import React from 'react'
import './NoteHome.css'
import AddCard from '../Components/AddCard/AddCard'
import SingleNote from '../Components/SingleNote/SingleNote'



const NoteHome = () => {
  return (
    <>
      <div>
      <AddCard/>
      <div className='flex flex-wrap mt-[50px]'>
        <SingleNote/>
      </div>
      </div>
    </>
  )
}

export default NoteHome