import './App.css';
import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
import Extratction from './components/2-4.Props/Extraction/Extraction';
import Composition from './components/2-4.Props/Composition';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent2 />
      {/* <FunctionalComponent />
      <ClassComponent />
      <Extratction />
      <Composition /> */}
    </div>
  );
}

export default App;
