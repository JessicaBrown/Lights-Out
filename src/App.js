import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Board} from "./Board";
// to solve 5x5 click under the lit lights until you get to the bottom row
// 1st box lit then click 4 & 5 in top row
// 2nd box lit then click 2 & 5 in top row
// 3rd box lit then click on 4 in top row
function App() {
  return (
    <div className='App'>
      {/* small board */}
    {/* <Board  nrows={3} ncols={3} chanceLightStartsOn={0.25 }/> */}
    {/* <span style={{'margin': 70}}></span> */}
    <Board />
  </div>
  );
}

export default App;
