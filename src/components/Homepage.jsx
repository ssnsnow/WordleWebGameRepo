import React from 'react'
import wordleImage from '../image/wordle.jpeg'

export default function HomePage() {
  return (
      <div className="centered">
      <h1 className="moving-text">
          <span className="green">Welcome </span>
          <span className="grey"> To </span>
          <span className="yellow"> Wordle</span>
        </h1>
      < img src={wordleImage} alt="Fill" />
      </div>
  )
}