import React from "react";

export default function BtnPrimary(props) {
  return (
    <button className="bg-Primary text-Secondary px-[30px] py-0 h-[44px] rounded-full">
      {props.txt}
    </button>
  );
}
