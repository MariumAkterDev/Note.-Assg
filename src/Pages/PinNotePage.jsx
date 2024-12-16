import React from "react";
import "./PinNotePage.css";


const PinNotePage = () => {
  return (
    <div className="flex flex-wrap gap-[60px] mb-[30px]">
      <div className="todSingCard">
        <h2 className="text-[20px] text-[#5d5c5c] font-semibold">helo</h2>
        <p className="text-[16px] text-[gray] !mt-[15px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nemo!
        </p>
      </div>

      <div className="todSingCard">
        <h2 className="text-[20px] text-[#5d5c5c] font-semibold">helo</h2>
        <p className="text-[16px] text-[gray] !mt-[15px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nemo!
        </p>
      </div>
    </div>
  );
};

export default PinNotePage;
