import './App.css';
import StyleSheet_1 from './components/StyleSheet_1';
import StyleSheet_2 from './components/StyleSheet_2';
import StyleSheet_3 from './components/StyleSheet_3';
import './components/StyleSheet.css'
import styleModule from './components/StyleSheet.module.css'

 
function App() {
  return (
    <div className="App">
      <div className='error'>This is ERROR in App.js</div>
      <div className={styleModule.success}>This is SUCCESS in App.js</div>
      <br />
      <StyleSheet_3 />
      {/* <StyleSheet_2 /> */}
      {/* <StyleSheet_1 isProp={true}/> */}
    </div>
  );
}

export default App;
