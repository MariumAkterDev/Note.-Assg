import React, { useState } from 'react'
import './AddCard.css'
import { IoMdAdd } from "react-icons/io";
import PopUp from '../PopUp/PopUp';

const AddCard = () => {
 
//  ============ usestate for button
    const [show, setShow] = useState (false)


 




  return (
    <>
        <div className="main_card" onClick={()=>setShow(true)}>
            <div className="addIcon"  >
                <IoMdAdd className="plusIcon" /> 
                <h2  >Add</h2>
            </div>
        </div>
        
         <PopUp showvalue={show} popCross={()=>setShow(false)}/>
       
    </>
  )
}

export default AddCard