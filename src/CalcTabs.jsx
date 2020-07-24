import React, { useState } from "react";
import CalcTab from "./CalcTab";

const CalcTabs = (
  atAGlanceCalculatorClass,
  atAGlanceCalculatorString,
  inDepthCalculatorClass,
  inDepthCalculatorString
) => {
  const [activeTab, setActiveTab] = useState("active");
  const [inactiveTab, setInactiveTab] = useState("");
  return (
    <ul className="calc-tabs">
      <CalcTab
        src={atAGlanceCalculatorClass}
        className={activeTab}
        onClick={(event) => setActiveTab(inactiveTab)}
        onClick={(event) => setInactiveTab(activeTab)}
        string={atAGlanceCalculatorString}
      />
      <CalcTab
        src={inDepthCalculatorClass}
        className={inactiveTab}
        onClick={(event) => setInactiveTab(activeTab)}
        onClick={(event) => setActiveTab(inactiveTab)}
        string={inDepthCalculatorString}
      />
    </ul>
  );
};

export default CalcTabs;
