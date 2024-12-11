import React from 'react'
import './PopUp.css'
import { RxCross2 } from "react-icons/rx";


const PopUp = ({showvalue}) => {

 

  return (
    <>
        <div className={`popMother ${showvalue ? 'w-full' : 'w-0'} transition-all duration-700 ease-in-out`}>
              <div className="cross text-[30px] text-[white] absolute top-[50px] right-[50px] hover:rotate-90">
                <RxCross2 className=''/>
              </div>
        </div>
    </>
  )
}

export default PopUp