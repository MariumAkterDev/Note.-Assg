import React, { useEffect, useState } from "react";
import "./SingleNote.css";
import { getDatabase, ref, onValue } from "firebase/database";

const SingleNote = ({}) => {

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
          arr.push(item.val())
        })
        setAllNote(arr)

      });
    }, []);



  // ============================================= Redux Data




  return (
    <>
      <div className="flex justify-between flex-wrap mt-[30px] mr-[15px]">

       {/* --------- Data Print fun starts ------------ */}

        {allNote.map((item) => (

          <div className="todSingCard mt-[30px]">
            <h2 className="text-[20px] text-[#5d5c5c] font-semibold">
              {item.todoTitle}
            </h2>
            <h6 className="text-[16px] text-[gray] !mt-[15px]">
            {item.todoNote}
            </h6>
          </div>

        ))}
        {/* --------- Data Print fun ends ------------ */}
      </div>
    </>
  );
};

export default SingleNote;
