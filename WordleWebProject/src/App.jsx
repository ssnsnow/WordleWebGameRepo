import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Game from './game';
import HomePage from './components/homepage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/game/normal" element={<Game difficulty={"normal"}/>} />
      <Route path = "/game/hard" element={<Game difficulty={"hard"}/>} />
    </Routes>
    </div>
  )
}

export default App;
