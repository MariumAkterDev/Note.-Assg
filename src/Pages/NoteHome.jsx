import React from 'react'
import './NoteHome.css'
import AddCard from '../Components/AddCard/AddCard'
import SingleNote from '../Components/SingleNote/SingleNote'



const NoteHome = () => {
  return (
    <>
     
        <div>
          <AddCard/>
          <SingleNote/>
        </div>
      
    </>
  )
}

export default NoteHome