import Hello from './components/Greet'; 
//This can only be used when the export is done for a component 'default'. However, since it is not, we will not be able to change the name. SO : 

import  {Greet3}  from './components/Greet';
//We need to make sure to add {} on component import if we are doing if without default export

function App() {
  return (
    <div className="App">
      <Greet3 />

      {/* < Hello /> */}
      {/* notice we used a self closing tag here.
      we need not use open and close tag like : <Hello></Hello>
      Unless there is text/input in component */}

      <Welcome />
    </div>
  );
}