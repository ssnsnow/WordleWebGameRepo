import React from 'react'
import { useNavigate } from 'react-router'
import Game from '../game'

export default function HomePage() {
  const navigate = useNavigate();
  
  function handleNormalClick(){
    navigate("/game/normal", { state: { myData: <Game difficulty={"normal"}/> } })
  };

  function handleHardClick(){
    navigate("/game/hard", { state: { myData: <Game difficulty={"hard"}/> } })
  };
  return (
    <div>
        <button onClick={handleNormalClick}>NormalGame</button>
        <button onClick={handleHardClick}>HardGame</button>
    </div>
  )
}