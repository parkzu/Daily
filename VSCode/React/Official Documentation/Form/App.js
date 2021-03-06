import './App.css';
import ControlledComponent from './components/2-10.Form/ControlledComponent';
import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent';

// import List from './components/2-9.List/List';
// import Condition from './components/2-8.ConditionalRendering/Condition';
// import Event from './components/2-7.Event/Event';
// import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
// import Extratction from './components/2-4.Props/Extraction/Extraction';
// import Composition from './components/2-4.Props/Composition';
// import ClassComponent from './components/2-5.State/ClassComponent';
// import FunctionalComponent from './components/2-5.State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <UncontrolledComponent />
      <ControlledComponent />
      {/* <List /> */}
      {/* <Condition /> */}
      {/* <Event /> */}
      {/* <ClassComponent2 /> */}
      {/* <FunctionalComponent />
      <ClassComponent />
      <Extratction />
      <Composition /> */}
    </div>
  );
}

export default App;
