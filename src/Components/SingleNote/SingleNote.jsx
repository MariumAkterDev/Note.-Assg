import React, { useEffect, useState } from "react";
import "./SingleNote.css";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const SingleNote = ({}) => {
   // ---------------------------- redux data
   const sliceUser = useSelector((state)=>state.currentUser.value)

  // ========================================= custom variables
  const [allNote, setAllNote] = useState([])


  // ===================================== Firebase variables
  const db = getDatabase();


  // ====================================== Function part


  // ========================================== Realtime Data
    useEffect(() => {
      const starCountRef = ref(db, "AllNote/" );
      onValue(starCountRef, (snapshot) => {
        let arr = []
        snapshot.forEach((item)=>{
   
          if(item.val().creatorId == sliceUser.uid){
            arr.push({...item.val() , key:item.key})
          }
        
        })
        setAllNote(arr)

      });
    }, []);



  // ============================================= Redux Data




  return (
    <>
      <div className="flex flex-wrap gap-[60px] ml-[380px] ">

       {/* --------- Data Print fun starts ------------ */}

        {allNote.map((item) => (

          <div style={{background:item.noteBgColor}} className="todSingCard">
            <h2 className="text-[20px] text-[#5d5c5c] font-semibold">
              {item.todoTitle}
            </h2>
            <p className="text-[16px] text-[gray] !mt-[15px]">
            {item.todoNote}
            </p>
          </div>

        ))}
        {/* --------- Data Print fun ends ------------ */}
      </div>
    </>
  );
};

export default SingleNote;
