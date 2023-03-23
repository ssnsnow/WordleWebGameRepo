import React from 'react'
import { useNavigate } from 'react-router'
import Game from '../Game'


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

  function handleRulesClick(){
    navigate("/Instruction")
  };

  return (
    <div className="centered">
      <div className = "navBar">
        <button className="my-button" onClick={handleHomeClick}>Home</button>
        <button className="my-button" onClick={handleNormalClick}>Normal</button>
        <button className="my-button" onClick={handleHardClick}>Hard</button>
        <button className="my-button" onClick={handleRulesClick}>How To Play</button>
      </div>
    </div>
  )
}