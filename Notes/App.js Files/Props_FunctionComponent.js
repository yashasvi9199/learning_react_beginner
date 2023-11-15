import './App.css';
import HeroesFunction from './components/Props_FunctionComponent';

function App() {
  return (
    <div className="App">
      <HeroesFunction name="Peter" heroName="SpiderMan">
    <p> He was bit by a spider </p>
    </HeroesFunction>

    <hr/><hr/>

    <HeroesFunction name="Clark" heroName="SuperMan">
    <button>Alien SuperHero</button>
    </HeroesFunction>
    </div>
  );
}

export default App;
