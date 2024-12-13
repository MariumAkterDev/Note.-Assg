import React, { useState } from 'react'
import './PopUp.css'
import { RxCross2 } from "react-icons/rx";
import { getDatabase, ref, set } from "firebase/database";


const PopUp = ({showvalue, popCross}) => {
  // ------------------------- firebase realtime data variable
  const db = getDatabase();
  // ------------------- usestate for colorPalate toggole
  const [showColor, setShowColor] = useState(false)
  // ------------------- usestate for to-do data
  const [todoData, setTodoData] = useState({todoTitle:'', todoNote:'', todoError:''})


  // =============================== all Raw Funstions Starts
  const handleSave = () =>{
    if(todoData.todoTitle == ''){
      setTodoData((prev)=>({...prev, todoError: 'Enter your todo title'}))
    }else if(todoData.todoNote == ''){
      setTodoData((prev)=>({...prev, todoError: 'Enter your todo note'}))
    }else{
      set(ref(db, 'AllNote/'), {
        todoTitle:todoData.todoTitle, 
        todoNote:todoData.todoNote
      });
    }
  }
  


  return (
    <>
      <div className={`popMother ${showvalue ? "w-full" : "w-0"}`}>
        <button
          onClick={popCross}
          className={`cross ${showvalue ? "opacity-[1]" : "opacity-0"}`}
        >
          <RxCross2 className="cross_Icon" />
        </button>
        {/* ================================= Input Feilds ================================= */} 
        <div className={`popNote ${showvalue ? "block" : "hidden"}`}>
             {/* --------------- input field error ----------- */}
          <p className='text-[18px] text-[red]'>{todoData.todoError}</p>
          {/* ============ All input and title fields ============= */}
          <h2>Title</h2>
          <input
          onChange={(e)=>{setTodoData((prev)=>({...prev, todoTitle:e.target.value})),  setTodoData((prev)=>({...prev, todoError: ''}))}}
            className="popTiltleInp"
            placeholder="Add a title...."
            type="text"
          />
          <h2 className="mt-[20px]">Note</h2>
          <textarea
            onChange={(e)=>{setTodoData((prev)=>({...prev, todoNote:e.target.value})), setTodoData((prev)=>({...prev, todoError: ''}))}}
            className="popNoteInp"
            placeholder="Take a note..."
            type="text"
          />
          {/* ----------------- All input and title fields ----------------- */}
          {/* ============ Note colors buttons ============= */}
          <div className="mt-[20px] h-[80px] flex items-center justify-between overflow-hidden ">
            <div className="colors relative">
              <img
                src="/images/color-palette (1).png"
                alt=""
                className="w-[45px] h-[45px] hover:rotate-[270deg] transition-all duration-[1s]"
                onClick={() => setShowColor(!showColor)}
              />

              {/* =========== color pallete ============== */}
              <div
                className={`flex items-center gap-[5px] h-full w-[150px] absolute  top-[0px] ${
                  showColor ? "left-[63px]" : "left-[-150px]"
                } transition-all duration-[0.6s] `}
              >
                <button className="w-[22px] h-[22px] bg-[#6acffb] rounded-full"></button>
                <button className="w-[22px] h-[22px] bg-[#FFA24C] rounded-full"></button>
                <button className="w-[22px] h-[22px] bg-[#E4B1F0] rounded-full"></button>

                <label htmlFor="colors">
                  <img
                    src="/images/color.png"
                    alt=""
                    className="w-[25px] h-[25px] hover:scale-[1.2] transition-all duration-[0.2s]"
                  />
                </label>
                <input id="colors" type="color" className="hidden" />
              </div>
              {/* -------------------- color pallete ends ------------------ */}
            </div>
            <div className="saveBtn">
              <button onClick={handleSave} > Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp