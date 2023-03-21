import React from 'react'
import Cell from './cell'
import '../style/board.css'

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
  // let newList = [...list];
  // if (list.length < 6) {
  //   for (let i = 0; i < 6 - list.length; i++) {
  //     newList.push("");
  //   }
  // }
  // let wordArray = newList.map((item, i) => {
  //   return (
  //     <Cell key={i} char={item}/>
  //   );
  // });


  return (
    <div className="wordsMatrix">{getBoard}</div>
  )
}

export default Board