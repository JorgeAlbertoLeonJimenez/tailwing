import React from "react";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";

export default function TitleText() {
  return (
    <div className="text-center ml-10 w-[480px]">
      <h1 className="text-[60px] font-bold text-Primary">One More Friend</h1>
      <p className="text-[46px] font-bold">Thousands More Fun!</p>
      <p className="text-[16px] text-left mt-2">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be whit you to have fun. we have 200+ different pets that
        can meet your needs!
      </p>
      <div className="w-[320px] flex justify-between mt-10">
        <BtnPrimary txt="Explore Now"/>
        <BtnSecondary txt="Explore Now"/>
      </div>
    </div>
  );
}
