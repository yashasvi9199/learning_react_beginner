import './App.css';
import HeroesClass from './components/Props_ClassComponents';

function App() {
  return (
    <div className="App">
      <HeroesClass name="Peter" heroName="SpiderMan">
    <p> He was bit by a spider </p>
    </HeroesClass>

    <hr/><hr/>

    <HeroesClass name="Clark" heroName="SuperMan">
    <button>Alien SuperHero</button>
    </HeroesClass>
    </div>
  );
}

export default App;
