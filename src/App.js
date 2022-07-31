import './App.css';
import { MemoizedChildA } from './components-2/Context/ContextChildren';
import  {ContextParent}  from './components-2/Context/ContextParent';
// import ParentFour from './components-2/Incorrect Optimization/ParentFour';
// import ParentThree from './components-2/Incorrect Optimization/ParentThree';
// import ChildOne from './components-2/Optimization/ChildOne';
// import GrandParent from './components-2/Optimization/GrandParent'; 
// import ParentTwo from './components-2/Optimization/ParentTwo';
// import ParentOne from './components-2/Optimization/ParentOne';
// import Parent from './components-2/Parent Child/Parent';
// import ArrayUseState from './components-2/Immutable State/ArrayUseState';
// import ObjectUseState from './components-2/Immutable State/ObjectUseState';
// import UseReducer from './components-2/UseReducer/UseReducer';
// import UseState from './components-2/UseState/UseState';


function App() {
  return (
    <div className="App">
      <ContextParent>
        <MemoizedChildA/>
      </ContextParent>
      {/* <ParentFour/> */}
      {/* <ParentThree ></ParentThree> */}
      {/* <ParentTwo/> */}
      {/* <GrandParent/> */}
      {/* <ArrayUseState/> */}
      {/* <ObjectUseState/> */}
      {/* <UseReducer/> */}
      {/* <UseState /> */}
 

    </div>
  );
}

export default App; 
