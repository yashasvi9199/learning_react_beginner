import Ref_Class_parent from "./component/Ref_Class_parent";
import Ref_callBackRef from "./component/Ref_callBackRef";
import Ref_createRef from "./component/Ref_createRef";
import Ref_forwarding_parent from "./component/Ref_forwarding_parent";


function App() {
  return (
    <div className="App">
      {/* <Ref_createRef /> */}
      {/* <Ref_callBackRef /> */}

      {/* <Ref_Class_parent /> */}

      <Ref_forwarding_parent />
    </div>
  );
}

export default App;