import { useState } from "react";
import "./App.css";
import FormAction_Class from "./components/FormAction_Class";
import FormAction_Function from "./components/FormAction_Function";

function App() {
  const [classComp, setClass] = useState(true);
  const [funcComp, setFunc] = useState(true);

  const switchForm = (btnInput) => {
    switch (btnInput) {
      case "class":
        setClass(false);
        setFunc(true);
        break;
      case "func":
        setClass(true);
        setFunc(false);
        break;
      case "hideAll":
        setClass(true);
        setFunc(true);
        break;
      case "showAll":
        setClass(false);
        setFunc(false);
    }
  };
  
  return (
    <div className="App">
      <FormAction_Class hidden={classComp} />
      <FormAction_Function hidden={funcComp} />

      <button onClick={() => switchForm("class")}>
        Change to Class Component
      </button>
      <button onClick={() => switchForm("func")}>
        Change to Function Component
      </button> <br />
      <button onClick={() => switchForm("hideAll")}>Hide All Components</button>
      <button onClick={() => switchForm("showAll")}>Show All Components</button>
    </div>
  );
}

export default App;
