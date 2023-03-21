import React from 'react'
import '../style/cell.css'

function Cell({item}) {
  let colorName = "default-color";
  if (item.state === 1) {
    colorName = "matched-color";
  } else if (item.state === 2){
    colorName = "wrongPos-color";
  }
  return (
    <div className={`square character ${colorName}`}>{item.char}</div>
  )
}

export default Cell