import React from "react";

const CalcTab = (src, className, string) => {
  return (
    <button src={src} className={className}>
      {string}
    </button>
  );
};

export default CalcTab;
