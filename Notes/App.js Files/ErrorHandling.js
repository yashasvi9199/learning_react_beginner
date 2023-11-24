import ErrorHandling_child from "./component/ErrorHandling_child";
import ErrorHandling_parent from "./component/ErrorHandling_parent";



function App() {
  return (
    <div className="App">
      <ErrorHandling_child>
        <ErrorHandling_parent />
      </ErrorHandling_child>
    </div>
  );
}

export default App;