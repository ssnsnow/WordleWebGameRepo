import { useState, useRef, useEffect } from 'react';
import './App.css';
import Title from './components/title';
import Board from './components/board';
import './style/page.css';
import './style/reset-button.css';
import '../six-letter-word.json';
import NormalGame from './normal';


function App() {
  return <div>{NormalGame}</div>;
}

export default App
