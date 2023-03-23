import React from 'react'
import Cell from './Cell'
import '../style/Board.css'

function Board({matrix}) {
  let getBoard = (
    matrix.map((row, rowIdx) => (
      <div className="wordsArray" key={rowIdx}>
        {row.map((item, colIdx) => (
          <Cell key={colIdx} item={item}/>
        ))}
      </div>
    ))
  );

  return (
    <div className="wordsMatrix">{getBoard}</div>
  )
}

export default Board