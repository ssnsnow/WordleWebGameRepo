import { Routes, Route } from 'react-router-dom';
import './App.css';
import Game from './game';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import Instruction from './components/Instruction';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/game/normal" element={<Game difficulty={"normal"}/>} />
      <Route path = "/game/hard" element={<Game difficulty={"hard"}/>} />
      <Route path = "/Instruction" element = {<Instruction/>}/>
    </Routes>
    </div>
  )
}

export default App;
