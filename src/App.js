import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Board} from "./Board";

function App() {
  return (
    <div className='App'>
    {/* <Board  nrows={6} ncols={6} chanceLightStartsOn={0.25 }/> */}
    <Board />
  </div>
  );
}

export default App;
