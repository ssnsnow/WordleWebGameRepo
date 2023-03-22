import React from 'react'
import "../style/Instruction.css"
import wordleImage from '../image/wordle.jpeg'

export default function Instruction() {
  return (
    <div className='body'>
      <h1 className="heading">How to Play</h1>
      <ul>
        <li>Each guess must be a 6-letter word for normal game, and a 7-letter word for hard game.</li>
        <li>The color of the tiles will change to show how close your guess was to the word.</li>
      </ul>
      <h2>Example</h2>
      < img src={wordleImage} alt="Fill" />
      <div className='explanation'>
        <p>W and I are in the world and in the correct spot. </p >
        <p>W and N are in the word but in the wrong spot. </p >
        <p>Q and A are not in the word in any spot</p >
      </div>
    </div>
  );
}