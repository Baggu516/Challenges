import './App.css';
import Dayone from './Dayone';
import Daytwo from './Daytwo';
import Daythree from './Daythree';
import Dayfour from './Dayfour';
import Dayfive from './Dayfive';
import Daysix from './Daysix';
import Dayseven from './Dayseven';
import Dayeight from './Dayeight';
import Whether from './Whether';
import Weather from './Weather';
import Dayseventeen from './Dayseventeen';
import DayTwenty from './DayTwenty';
import Daytwenti from './Daytwenti';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState,createContext} from "react";
import ComponentA from './childtoparent/ComponentA';
export const context=createContext();

function App() {
  const [o,setO]=useState("")
  const [v,setV]=useState(false)
  var p={
    o:o,
    setO:setO,
    v:v,
    setV
  }
  return (
    <div className="App">
      <context.Provider value={p}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={  <DayTwenty/>}/>
          <Route path="/hi" element={<Daytwenti />} />
          <Route path="/back?:post" element={<DayTwenty/>}/>
      </Routes>
    
    </BrowserRouter>
      </context.Provider>
      
      {/* <Dayone/> */}
      {/* <Daytwo/> */}
      {/* <Daythree/> */}
      {/* <Dayfour/> */}
      {/* <Dayfive/> */}
      {/* <Daysix/> */}
      {/* <Dayseven/> */}
      {/* <Dayeight/> */}
      {/* <Whether/> */}
      {/* <Weather/> */}
      {/* <Dayseventeen/> */}
      {/* <ComponentA/> */}
    </div>
  );
}

export default App;
