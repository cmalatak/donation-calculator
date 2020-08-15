import React from "react";

import "./App.css";
import AtAGlanceCalculator from "./AtAGlanceCalculator";
import InDepthCalculator from "./InDepthCalculator";
import NavMenu from "./NavMenu";
import MobileNavButton from "./MobileNavButton";

const App = () => {
  return (
    <div className="app">
      <header>
        {window.innerWidth > 768 ? <NavMenu /> : <MobileNavButton />}
      </header>
      <h1>How much should I be donating?</h1>
      <AtAGlanceCalculator
        className="at-a-glance-calculator"
        calcName="At a Glance"
      />
      <InDepthCalculator className="in-depth-calculator" calcName="In Depth" />
    </div>
  );
};

export default App;
