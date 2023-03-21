import React from 'react'
import { useNavigate } from 'react-router'
import Game from '../game'

export default function () {
  const navigate = useNavigate();
  function handleHomeClick(){
    navigate("/")
  };

  function handleNormalClick(){
    navigate("/game/normal", { state: { myData: <Game difficulty={"normal"}/> } })
  };

  function handleHardClick(){
    navigate("/game/hard", { state: { myData: <Game difficulty={"hard"}/> } })
  };

  return (
    <div className = "navBar">
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleNormalClick}>Normal</button>
        <button onClick={handleHardClick}>Hard</button>
    </div>
  )
}