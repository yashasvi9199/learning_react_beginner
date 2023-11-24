import HOC_old_click from "./component/HOC_old_click";
import HOC_old_hover from "./component/HOC_old_hover";

import HOC_new_click from "./component/HOC_new_click";
import HOC_new_hover from "./component/HOC_new_hover";

function App() {
  return (
    <div className="App">
      {/* <HOC_old_click />
      <HOC_old_hover /> */}

      <HOC_new_click name = 'Yash'/>
      <HOC_new_hover />
    </div>
  );
}

export default App;