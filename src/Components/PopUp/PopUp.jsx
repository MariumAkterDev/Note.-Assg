import React from 'react'
import './PopUp.css'
import { RxCross2 } from "react-icons/rx";


const PopUp = ({showvalue, popCross}) => {

 

  return (
    <>
        <div className={`popMother ${showvalue ? 'w-full' : 'w-0'}`}>
          <button onClick={popCross} className={`cross ${showvalue ? 'opacity-[1]' : 'opacity-0' }`}>
            <RxCross2 className='cross_Icon'/>
          </button>
          {/* ================================= Input Feilds ================================= */}
          <div className="popNote">
            {/* ============ All input and title fields ============= */}
            <h2>Title</h2>
            <input className='popTiltleInp' placeholder='Add a title....' type="text" />
            <h2 className='mt-[20px]'>Note</h2>
            <textarea className='popNoteInp' placeholder='Take a note...' type="text" />
            {/* ----------------- All input and title fields ----------------- */}
          </div>



 





        </div>
    </>
  )
}

export default PopUp